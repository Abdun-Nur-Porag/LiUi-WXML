// userComponents.js

// Text Component
userComponents['text'] = (props) => {
  const textElement = new Create('span')
    .text(props.text || 'Default Text')
    .attrs({
      class: props.class || '',
      style: props.style || '',
    });
  return textElement;
};

// Button Component
userComponents['button'] = (props) => {
  const buttonElement = new Create('button')
    .text(props.text || 'Click Me')
    .attrs({
      class: props.class || '',
      style: props.style || '',
    })
    .on('click', () => {
      if (props.onClick) {
        new Function(props.onClick)(); // Safer alternative to eval
      } else {
        console.log('Button clicked!');
      }
    });
  return buttonElement;
};

// Menu Component
userComponents['menu'] = (props) => {
  const menuElement = new Create('div')
    .attrs({
      class: props.class || 'menu',
      style: props.style || '',
    });
  
  if (props.items) {
    const items = JSON.parse(props.items.replace(/'/g, '"')); // Parse items array
    items.forEach((item) => {
      const menuItem = new Create('div')
        .text(item.text || 'Menu Item')
        .attrs({
          class: 'menu-item',
          style: 'padding: 10px; cursor: pointer;',
        })
        .on('click', () => {
          if (item.onClick) {
            new Function(item.onClick)(); // Safer alternative to eval
          } else {
            console.log(`Clicked: ${item.text}`);
          }
        });
      menuElement.append(menuItem);
    });
  }
  
  return menuElement;
};