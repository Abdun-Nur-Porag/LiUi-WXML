
class Create {
  constructor(tag) {
    this.el = document.createElement(tag);
  }
  
  text(content) {
    this.el.textContent = content;
    return this;
  }
  
  html(content) {
    this.el.innerHTML = content;
    return this;
  }
  
  class(classes) {
    if (typeof classes === 'string') {
      this.el.classList.add(classes);
    } else if (Array.isArray(classes)) {
      classes.forEach(cls => this.el.classList.add(cls));
    } else if (typeof classes === 'object') {
      Object.values(classes).forEach(cls => this.el.classList.add(cls));
    }
    return this;
  }
  
  id(idName) {
    this.el.id = idName;
    return this;
  }
  
  attrs(attributes) {
    if (attributes && typeof attributes === 'object') {
      Object.entries(attributes).forEach(([attr, value]) => {
        this.el.setAttribute(attr, value);
      });
    }
    return this;
  }
  
  style(styles) {
    if (styles && typeof styles === 'object') {
      Object.entries(styles).forEach(([key, value]) => {
        if (key.startsWith('--')) {
          this.el.style.setProperty(key, value);
        } else {
          this.el.style[key] = value;
        }
      });
    }
    return this;
  }
  
  on(event, handler) {
    this.el.addEventListener(event, handler);
    return this;
  }
  
  off(event, handler) {
    this.el.removeEventListener(event, handler);
    return this;
  }
  
  add(target) {
    const parent = typeof target === 'string' ? document.querySelector(target) : target;
    if (parent) {
      parent.appendChild(this.el);
    } else {
      console.error("Parent element not found:", target);
    }
    return this;
  }
  
  append(child) {
    if (child instanceof Create) {
      this.el.appendChild(child.el);
    } else if (child instanceof HTMLElement) {
      this.el.appendChild(child);
    } else {
      console.error("Invalid child element:", child);
    }
    return this;
  }
}

// Global Components (loaded from globalCom.js)
const globalComponents = {};

// User-Defined Components (loaded dynamically from XML)
const userComponents = {};

// Load external script dynamically
const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
    document.head.appendChild(script);
  });
};

// Load global components
const loadGlobalComponents = async () => {
  try {
    await loadScript('globalCom.js');
    console.log("Global components loaded successfully.");
  } catch (error) {
    console.error("Error loading global components:", error);
  }
};

// Load user-defined components from XML
const loadUserComponents = async (node) => {
  if (node.tagName === 'use' && node.hasAttribute('com')) {
    const componentUrl = node.getAttribute('com');
    try {
      await loadScript(componentUrl);
      console.log(`User component loaded: ${componentUrl}`);
    } catch (error) {
      console.error(`Error loading user component: ${componentUrl}`, error);
    }
  }
};

// Parse XML String
const parseXML = (xmlString) => {
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    if (xmlDoc.getElementsByTagName("parsererror").length) {
      throw new Error("XML Parsing Error: Invalid XML format.");
    }
    return xmlDoc.documentElement;
  } catch (error) {
    console.error("Error parsing XML:", error);
    return null;
  }
};

// Convert XML Element to UI Element (Supports Nested Elements)
const parseElement = async (node) => {
  if (!node || node.nodeType !== 1) return null;
  
  // Handle <style> tags for CSS
  if (node.tagName === 'style') {
    const styleContent = node.textContent;
    const styleElement = document.createElement('style');
    styleElement.textContent = styleContent;
    document.head.appendChild(styleElement);
    return null; // Skip rendering <style> itself
  }
  
  // Handle <script> tags
  if (node.tagName === 'script') {
    const scriptElement = document.createElement('script');
    if (node.hasAttribute('src')) {
      // External script
      scriptElement.src = node.getAttribute('src');
    } else {
      // Inline script
      scriptElement.textContent = node.textContent;
    }
    document.head.appendChild(scriptElement);
    return null; // Skip rendering <script> itself
  }
  
  // Handle <use> tags for user-defined components
  if (node.tagName === 'use' && node.hasAttribute('com')) {
    await loadUserComponents(node);
    return null; // Skip rendering <use> itself
  }
  
  const tagName = node.tagName.includes(":") ? node.tagName.split(":")[1] : node.tagName;
  
  // Collect attributes as properties
  const props = {};
  Array.from(node.attributes).forEach((attr) => {
    props[attr.name] = attr.value;
  });
  
  let element;
  
  // Check if the tag matches a global or user-defined component
  if (globalComponents[tagName]) {
    element = globalComponents[tagName](props);
  } else if (userComponents[tagName]) {
    element = userComponents[tagName](props);
  } else {
    // Default HTML element
    element = new Create(tagName).attrs(props);
  }
  
  // Process the class attribute separately
  if (props.class) {
    const classes = props.class.split(',').map(cls => cls.trim());
    element.class(classes);
  }
  
  // Process the style attribute separately
  if (props.style) {
    const styles = props.style.split(';').reduce((acc, style) => {
      const [key, value] = style.split(':').map(s => s.trim());
      if (key && value) {
        acc[key] = value;
      }
      return acc;
    }, {});
    element.style(styles);
  }
  
  // Process child nodes (Nested Elements)
  for (const childNode of Array.from(node.childNodes)) {
    if (childNode.nodeType === 1) {
      // Element node
      const childElement = await parseElement(childNode);
      if (childElement) {
        element.append(childElement);
      }
    } else if (childNode.nodeType === 3 && childNode.nodeValue.trim()) {
      // Text node
      element.el.appendChild(document.createTextNode(childNode.nodeValue.trim()));
    }
  }
  
  return element;
};

// Fetch XML content from an external file
const fetchXML = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch XML: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error("Error fetching XML:", error);
    return null;
  }
};

// Render XML UI into a Target Container
const renderXML = async (xmlUrl, targetSelector) => {
  try {
    const xmlString = await fetchXML(xmlUrl);
    if (!xmlString) {
      throw new Error("Failed to fetch XML content.");
    }
    
    const xmlRoot = parseXML(xmlString);
    if (!xmlRoot) {
      throw new Error("Failed to parse XML content.");
    }
    
    const target = document.querySelector(targetSelector);
    if (!target) {
      throw new Error(`Target container not found: ${targetSelector}`);
    }
    
    const uiElement = await parseElement(xmlRoot);
    if (uiElement) {
      target.appendChild(uiElement.el);
    } else {
      throw new Error("Failed to create UI element from XML.");
    }
  } catch (error) {
    console.error("Error rendering XML:", error);
    console.error("Stack trace:", error.stack); // Log stack trace for debugging
  }
};

// Example usage:
// renderXML("example.xml", ".app");