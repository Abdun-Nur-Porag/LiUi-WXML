// Lithium.js Framework - Optimized for Android-like App Layout

// Core Creator Function
const create = (tag) => {
  const el = document.createElement(tag);
  
  const methods = {
    text(content) {
      this.el.textContent = content;
      return this;
    },
    html(content) {
      this.el.innerHTML = content;
      return this;
    },
    class(classes) {
      if (typeof classes === 'string') {
        this.el.classList.add(classes);
      } else if (Array.isArray(classes)) {
        classes.forEach(cls => this.el.classList.add(cls));
      } else if (typeof classes === 'object') {
        Object.values(classes).forEach(cls => this.el.classList.add(cls));
      }
      return this;
    },
    id(idName) {
      this.el.id = idName;
      return this;
    },
    attrs(attributes) {
      Object.entries(attributes).forEach(([attr, value]) => this.el.setAttribute(attr, value));
      return this;
    },
    style(styles) {
      Object.entries(styles).forEach(([key, value]) => this.el.style[key] = value);
      return this;
    },
    on(event, handler) {
      this.el.addEventListener(event, handler);
      return this;
    },
    add(target) {
      const parent = typeof target === 'string' ? document.querySelector(target) : target;
      parent.appendChild(this.el);
      return this;
    },
    child(children) {
      children.forEach(child => this.el.appendChild(child.el));
      return this;
    },
    append(children) {
      children.forEach(child => this.el.appendChild(child.el));
      return this;
    },
    position(positionValues) {
      this.el.style.position = 'absolute';
      Object.entries(positionValues).forEach(([pos, value]) => this.el.style[pos] = value);
      return this;
    },
    margin(marginValues) {
      this.el.style.margin = marginValues;
      return this;
    },
    padding(paddingValues) {
      this.el.style.padding = paddingValues;
      return this;
    },
    flex(flexValues) {
      this.el.style.display = 'flex';
      this.el.style.flex = flexValues;
      return this;
    },
    radius(radiusValues) {
      this.el.style.borderRadius = radiusValues;
      return this;
    },
    border(borderStyle) {
      this.el.style.border = borderStyle;
      return this;
    },
    backgroundColor(color) {
      this.el.style.backgroundColor = color;
      return this;
    },
    //add font size
    fontSize(size){
      this.el.style.fontSize=size;
      return this;
    },
    fontColor(color){
      this.el.style.color=color;
      return this
    },
    //width
    width(width){
      this.el.style.width=width;
      return this;
    },
    height(height){
      this.el.style.height=height;
      return this;
    },
    /*
    log id:1
    update history:
    -------
    fontSize()
    fontColor()
    width()
    height()
    -------
    */
    /*===== update 18feb 2025=====*/
    
    
    
    boxShadow(shadowValues) {
      this.el.style.boxShadow = shadowValues;
      return this;
    },
    textShadow(shadowValues) {
      this.el.style.textShadow = shadowValues;
      return this;
    },
    layout(layoutType) {
      this.el.style.display = 'flex';
      this.el.style.flexDirection = layoutType === 'column' ? 'column' : 'row';
      return this;
    },
    responsive(breakpoint, styles) {
      const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
      const applyStyles = () => {
        if (mediaQuery.matches) {
          Object.entries(styles).forEach(([key, value]) => this.el.style[key] = value);
        }
      };
      mediaQuery.addEventListener('change', applyStyles);
      applyStyles();
      return this;
    },
    // New Methods
    hide() {
      this.el.style.display = 'none';
      return this;
    },
    show() {
      this.el.style.display = '';
      return this;
    },
    toggle() {
      this.el.style.display = this.el.style.display === 'none' ? '' : 'none';
      return this;
    },
    data(key, value) {
      if (value === undefined) {
        return this.el.dataset[key];
      }
      this.el.dataset[key] = value;
      return this;
    },
    removeClass(classes) {
      if (typeof classes === 'string') {
        this.el.classList.remove(classes);
      } else if (Array.isArray(classes)) {
        classes.forEach(cls => this.el.classList.remove(cls));
      } else if (typeof classes === 'object') {
        Object.values(classes).forEach(cls => this.el.classList.remove(cls));
      }
      return this;
    },
    toggleClass(classes) {
      if (typeof classes === 'string') {
        this.el.classList.toggle(classes);
      } else if (Array.isArray(classes)) {
        classes.forEach(cls => this.el.classList.toggle(cls));
      } else if (typeof classes === 'object') {
        Object.values(classes).forEach(cls => this.el.classList.toggle(cls));
      }
      return this;
    },
    // Enhanced Methods
    addEventListener(event, handler, options) {
      this.el.addEventListener(event, handler, options);
      return this;
    },
    removeEventListener(event, handler, options) {
      this.el.removeEventListener(event, handler, options);
      return this;
    },
    // Android App Layout Components
    createAppBar(title, options = {}) {
      const appBar = create('div').class('app-bar');
      if (title) {
        appBar.child([create('h1').text(title)]);
      }
      if (options.menuIcon) {
        const menuIcon = create('img').attrs({ src: options.menuIcon, alt: 'Menu' });
        appBar.child([menuIcon]);
      }
      if (options.actions) {
        const actionContainer = create('div').class('action-container');
        options.actions.forEach(action => {
          const actionButton = create('button').text(action.label).on('click', action.handler);
          actionContainer.child([actionButton]);
        });
        appBar.child([actionContainer]);
      }
      return appBar;
    },
  };
  
  return Object.assign({ el }, methods);
};

const createAppBar = () => create('header')
  .class('app-bar')
  .style({
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 10,
  });

// Create Button for Android-style buttons
const createButton = (type = 'primary') => {
  const button = create('button')
    .class('button')
    .style({
      position: 'relative',
      overflow: 'hidden',
      transition: 'box-shadow 0.3s ease, background 0.3s ease',
      outline: 'none',
      minWidth: '120px',
      height: '45px',
      fontSize: '18px',
      borderRadius: '30px',
      border: 'none',
      boxShadow: '0 4px 10px rgba(74, 86, 226, 0.3)',
      cursor: 'pointer',
    })
    .on('click', function(event) {
      const ripple = create('span')
        .style({
          position: 'absolute',
          borderRadius: '50%',
          transform: 'scale(0)',
          animation: 'ripple 600ms linear',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        })
        .add(this);
      const size = Math.max(this.offsetWidth, this.offsetHeight);
      const rect = this.getBoundingClientRect();
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      setTimeout(() => ripple.el.remove(), 600);
    });
  
  const buttonStyles = {
    primary: {
      background: 'linear-gradient(135deg, #4A56E2, #7986FB)',
      color: 'white',
      hoverBackground: 'linear-gradient(135deg, #7986FB, #4A56E2)',
    },
    secondary: {
      background: 'linear-gradient(135deg, #F18900, #FFBE68)',
      color: 'white',
      hoverBackground: 'linear-gradient(135deg, #FFBE68, #F18900)',
    },
    outlined: {
      background: 'white',
      color: '#689DFF',
      border: '2px solid #689DFF',
      hoverBackground: '#689DFF',
      hoverColor: 'white',
    },
  };
  
  const style = buttonStyles[type] || buttonStyles.primary;
  button.style(style);
  
  button.on('mouseover', () => {
    button.style({ background: style.hoverBackground, color: style.hoverColor });
  }).on('mouseout', () => {
    button.style({ background: style.background, color: style.color });
  });
  
  return button;
};

// Create Box component (flex container)
const createBox = () => create('div')
  .class('box')
  .style({
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: '#fff',
  });

// Create Card for Android-like card UI
const createCard = () => create('div')
  .class('card')
  .style({
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff',
    marginBottom: '15px',
  });

// Create Input Field styled for Android Apps
const createInput = () => create('input')
  .class('input')
  .style({
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
    fontSize: '16px',
    width: '100%',
  });

// Create Dropdown Component
const createDropdown = (options) => {
  const dropdown = create('select')
    .class('dropdown')
    .style({
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      width: '100%',
    });
  
  options.forEach(option => {
    dropdown.child([create('option').text(option).attrs({ value: option })]);
  });
  
  return dropdown;
};

// Create Modal Component
const createModal = (content) => {
  const modal = create('div')
    .class('modal')
    .style({
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      zIndex: 1000,
    });
  
  const overlay = create('div')
    .class('modal-overlay')
    .style({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
    })
    .on('click', () => {
      modal.el.remove();
      overlay.el.remove();
    });
  
  modal.child([content]);
  document.body.appendChild(overlay.el);
  document.body.appendChild(modal.el);
  
  return modal;
};

// Layouts and Responsive Handling
const createLayout = () => create('div')
  .class('layout')
  .style({
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '60px', // to account for fixed app bar
    gap: '15px',
    maxWidth: '100%',
    height: '100vh',
    boxSizing: 'border-box',
  });
  /*

const outlined_button=()=>create("button").style({
  border:"none",
  outline:"none",
  width:"100px",
  height:'50px'
})*/