        // Function to apply all custom attributes as CSS styles
        function applyCustomStyles() {
          // Select all elements with any attributes
          const elements = document.querySelectorAll('*');
          
          elements.forEach(element => {
            // Get all attributes of the element
            const attributes = element.attributes;
            
            // Loop through all attributes
            for (let i = 0; i < attributes.length; i++) {
              const attr = attributes[i];
              const attrName = attr.name; // Attribute name (e.g., "width", "background-color")
              const attrValue = attr.value; // Attribute value (e.g., "200px", "lightblue")
              
              // Convert custom attribute names to valid CSS property names
              const cssProperty = attrName.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
              
              // Apply the attribute as a CSS style
              element.style[cssProperty] = attrValue;
            }
          });
        }
        
        // Run the function when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', applyCustomStyles);