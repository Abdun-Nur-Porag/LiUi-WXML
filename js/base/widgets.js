
// ===== App Bar Components =====
userComponents['appBar'] = (props) => {
  return new Create('header').class(props.class || {});
};

userComponents['appBarBody'] = (props) => {
  return new Create('nav').class({
    pos: props.pos || 'top',
    ...props.class,
  });
};

userComponents['appBarLeft'] = (props) => {
  return new Create('div').class({
    align: props.align || 'left-align',
    ...props.class,
  });
};

userComponents['appBarRight'] = (props) => {
  return new Create('div').class({
    align: props.align || 'right-align',
    ...props.class,
  });
};

userComponents['appBarCenter'] = (props) => {
  return new Create('div').class({
    align: props.align || 'center-align',
    width: props.width || 'max',
    ...props.class,
  });
};

// ===== Dialog Components =====
userComponents['dialog'] = (props) => {
  return new Create('dialog');
};

userComponents['dialogBody'] = (props) => {
  return new Create('div');
};

userComponents['dialogModel'] = (props) => {
  return new Create('dialog').class({
    type: props.type || 'modal',
    ...props.class,
  });
};

userComponents['dialogFullScreen'] = (props) => {
  return new Create('dialog').class({
    type: props.type || 'max',
    ...props.class,
  });
};

userComponents['dialogTop'] = (props) => {
  return new Create('dialog').class({
    type: props.type || 'top',
    ...props.class,
  });
};

// Dialog Bottom (not working, but converted as requested)
userComponents['dialogBottom'] = (props) => {
  return new Create('dialog').class({
    type: props.type || 'bottom',
    ...props.class,
  });
};

userComponents['dialogLeft'] = (props) => {
  return new Create('dialog').class({
    type: props.type || 'left',
    ...props.class,
  });
};

userComponents['dialogRight'] = (props) => {
  return new Create('dialog').class({
    type: props.type || 'right',
    ...props.class,
  });
};

// ===== Card Component =====
userComponents['card'] = (props) => {
  return new Create('article');
};

// ===== List and components =====
userComponents['list'] = (props) => {
  return new Create('ul').class({
    type: props.type || 'list',
    ...props.class,
  });
};

userComponents['listItem'] = (props) => {
  return new Create('li');
};

userComponents['listItemLeft'] = (props) => {
  return new Create('button').class({
    type: props.type || 'transparent',
    shape: props.shape || 'circle',
    ...props.class,
  });
};

userComponents['listItemCenter'] = (props) => {
  return new Create('div').class({
    size: props.size || 'max',
    ...props.class,
  });
};

userComponents['listItemTitle'] = (props) => {
  return new Create('h6').class({
    size: props.size || 'small',
    ...props.class,
  });
};

userComponents['listItemSubTitle'] = (props) => {
  return new Create('text');
};

userComponents['listItemRight'] = (props) => {
  return new Create('label');
};
//=============menu==============

userComponents['menu'] = (props) => {
  return new Create('button');
};

userComponents['menuTitle'] = (props) => {
  return new Create('span');
};

userComponents['menuBody'] = (props) => {
  return new Create('menu');
};

userComponents['menuItem'] = (props) => {
  return new Create('li');
};

//=========Popup================

userComponents['popup'] = (props) => {
  return new Create('div').class({
    type: props.type || 'snackbar',
    ...props.class,
  });
};
//===========Layout===========
userComponents['horizontalScroll'] = (props) => {
  return new Create('div').class({
    type: props.type || 'scroll',
    direction: props.direction || 'row',
    ...props.class,
  });
};

userComponents['verticalScroll'] = (props) => {
  return new Create('div').class({
    type: props.type || 'scroll',
    direction: props.direction || 'row',
    ...props.class,
  });
};

// ===== Steppers Components =====
userComponents['steppers'] = (props) => {
  return new Create('nav');
};

userComponents['steppersItem'] = (props) => {
  return new Create('button').class({
    shape: props.shape || 'circle',
    size: props.size || 'small',
    ...props.class,
  });
};

userComponents['steppersItemEnable'] = (props) => {
  return new Create('i');
};

userComponents['steppersSpace'] = (props) => {
  return new Create('hr').class({
    size: props.size || 'max',
    ...props.class,
  });
};

userComponents['steppersDisable'] = (props) => {
  return new Create('button')
    .class({
      shape: props.shape || 'circle',
      size: props.size || 'small',
      ...props.class,
    })
    .attrs(props.attrs || {});
};

// ===== Position Box Components =====
// App Box General
userComponents['positionBox'] = (props) => {
  return new Create('article').class({
    main: props.main || 'no-padding',
    size: props.size || 'auto',
    ...props.class,
  });
};

userComponents['positionBoxMedium'] = (props) => {
  return new Create('article').class({
    main: props.main || 'no-padding',
    size: props.size || 'medium',
    ...props.class,
  });
};

userComponents['positionBoxSmall'] = (props) => {
  return new Create('article').class({
    main: props.main || 'no-padding',
    size: props.size || 'small',
    ...props.class,
  });
};

userComponents['positionBoxLarge'] = (props) => {
  return new Create('article').class({
    main: props.main || 'no-padding',
    size: props.size || 'large',
    ...props.class,
  });
};

userComponents['positionBoxExtra'] = (props) => {
  return new Create('article').class({
    main: props.main || 'no-padding',
    size: props.size || 'extra',
    ...props.class,
  });
};

// App Box Top
userComponents['positionBoxTopLeft'] = (props) => {
  return new Create('div').class({
    padding: props.padding || 'padding',
    abs: props.abs || 'absolute',
    cent: props.cent || 'left',
    mid: props.mid || 'top',
    ...props.class,
  });
};

userComponents['positionBoxTopRight'] = (props) => {
  return new Create('div').class({
    padding: props.padding || 'padding',
    abs: props.abs || 'absolute',
    cent: props.cent || 'right',
    mid: props.mid || 'top',
    ...props.class,
  });
};

userComponents['positionBoxTopCenter'] = (props) => {
  return new Create('div').class({
    padding: props.padding || 'padding',
    abs: props.abs || 'absolute',
    cent: props.cent || 'center',
    mid: props.mid || 'top',
    ...props.class,
  });
};

// App Box Middle
userComponents['positionBoxMiddleLeft'] = (props) => {
  return new Create('div').class({
    padding: props.padding || 'padding',
    abs: props.abs || 'absolute',
    cent: props.cent || 'left',
    mid: props.mid || 'middle',
    ...props.class,
  });
};

userComponents['positionBoxMiddleRight'] = (props) => {
  return new Create('div').class({
    padding: props.padding || 'padding',
    abs: props.abs || 'absolute',
    cent: props.cent || 'right',
    mid: props.mid || 'middle',
    ...props.class,
  });
};

userComponents['positionBoxMiddleCenter'] = (props) => {
  return new Create('div').class({
    padding: props.padding || 'padding',
    abs: props.abs || 'absolute',
    cent: props.cent || 'center',
    mid: props.mid || 'middle',
    ...props.class,
  });
};

// App Box Bottom
userComponents['positionBoxBottomLeft'] = (props) => {
  return new Create('div').class({
    padding: props.padding || 'padding',
    abs: props.abs || 'absolute',
    cent: props.cent || 'left',
    mid: props.mid || 'bottom',
    ...props.class,
  });
};

userComponents['positionBoxBottomRight'] = (props) => {
  return new Create('div').class({
    padding: props.padding || 'padding',
    abs: props.abs || 'absolute',
    cent: props.cent || 'right',
    mid: props.mid || 'bottom',
    ...props.class,
  });
};

userComponents['positionBoxBottomCenter'] = (props) => {
  return new Create('div').class({
    padding: props.padding || 'padding',
    abs: props.abs || 'absolute',
    cent: props.cent || 'center',
    mid: props.mid || 'bottom',
    ...props.class,
  });
};

//===========align ment=========

userComponents['alignLeft'] = (props) => {
  return new Create('article').class({
    leftAlign: props.leftAlign || 'left-align',
    ...props.class,
  });
};

userComponents['alignTopLeft'] = (props) => {
  return new Create('article').class({
    leftAlign: props.leftAlign || 'left-align',
    top: props.top || 'top-align',
    ...props.class,
  });
};

userComponents['alignBottomLeft'] = (props) => {
  return new Create('article').class({
    leftAlign: props.leftAlign || 'left-align',
    bottom: props.bottom || 'bottom',
    ...props.class,
  });
};

userComponents['alignRight'] = (props) => {
  return new Create('article').class({
    rightAlign: props.rightAlign || 'right-align',
    ...props.class,
  });
};

userComponents['alignTopRight'] = (props) => {
  return new Create('article').class({
    rightAlign: props.rightAlign || 'right-align',
    top: props.top || 'top',
    ...props.class,
  });
};

userComponents['alignBottomRight'] = (props) => {
  return new Create('article').class({
    rightAlign: props.rightAlign || 'right-align',
    bottom: props.bottom || 'bottom',
    ...props.class,
  });
};

userComponents['alignCenter'] = (props) => {
  return new Create('article').class({
    rightAlign: props.rightAlign || 'center-align',
    middle: props.middle || 'middle-align',
    ...props.class,
  });
};

userComponents['alignCenterLeft'] = (props) => {
  return new Create('article').class({
    rightAlign: props.rightAlign || 'left-align',
    middle: props.middle || 'middle-align',
    ...props.class,
  });
};

userComponents['alignCenterRight'] = (props) => {
  return new Create('article').class({
    leftAlign: props.leftAlign || 'right-align',
    middle: props.middle || 'middle-align',
    ...props.class,
  });
};

//=======Button=======
userComponents['outlinedButton'] = (props) => {
  return new Create('button')
    .class({
      class1: 'border'
    })
  
};

userComponents['buttonCircleTransparent'] = (props) => {
  return new Create('button')
    .class({
      class1: 'transparent',
      class2: "circle"
    })
  
};
//=======fab button=====
userComponents['fabButton'] = (props) => {
  return new Create('button')
    .class({
      class1: 'extend',
      class2: 'square'
    })
  //.css({})
  //.attrs({});
};
userComponents['fabButtonText'] = (props) => {
  return new Create('span')
    .class({})
  //.css({})
  //.attrs({});
};
userComponents['fabButtonIcon'] = (props) => {
  return new Create('i')
    .class({})
  //.css({})
  //.attrs({});
};


//======ICON=========
userComponents['icon'] = (props) => {
  return new Create('i')
    .class({})
  //.css({})
  //.attrs({});
};

//=====checkbox=====
userComponents['checkbox'] = (props) => {
  return new Create('label')
    .class({
      class1: 'checkbox',
    
    })
  //.css({})
  //.attrs({});
};

userComponents['checkboxBody'] = (props) => {
return new Create('input')
  .class({})
//.css({})
.attrs({
type: 'checkbox'
});
};

userComponents['checkboxText'] = (props) => {
  return new Create('span')
    .class({})
  //.css({})
  //.attrs({});
};


userComponents['checkboxIcon'] = (props) => {
  return new Create('label')
    .class({
      class1: 'checkbox',
      class2: "icon"
    })
  //.css({})
  //.attrs({});
};

userComponents['oldIcon'] = (props) => {
  return new Create('i')
    .class({})
  //.css({})
  //.attrs({});
};

userComponents['newIcon'] = (props) => {
  return new Create('i')
    .class({})
  //.css({})
  //.attrs({});
};

//=======chip=======
userComponents['chip'] = (props) => {
  return new Create('button')
    .class({
      class1: 'chip'
    })
  //.css({})
  //.attrs({});
};
userComponents['chipText'] = (props) => {
  return new Create('span')
    .class({
    })
  //.css({})
  //.attrs({});
};

userComponents['details'] = (props) => {
  return new Create('details')
    .class({
    
    })
  //.css({})
  //.attrs({});
};
userComponents['detailsTitle'] = (props) => {
  return new Create('summary')
    .class({
      class1: 'chip'
    })
  //.css({})
  //.attrs({});
};
userComponents['detailsText'] = (props) => {
  return new Create('p')
    .class({
      class1: 'chip'
    })
  //.css({})
  //.attrs({});
};

//======layout====

userComponents['verticalLayout'] = (props) => {
  return new Create('nav')
    .class({
      class1: 'vertical'
    })
  //.css({})
  //.attrs({});
};


userComponents['horizontalLayout'] = (props) => {
  return new Create('div')
    .class({
      class1: 'row'
    })
  //.css({})
  //.attrs({});
};

//======input=====

userComponents['inputBox'] = (props) => {
  return new Create('div')
    .class({
      class1: 'field',
      class2:"label"
    })
  //.css({})
  //.attrs({});
};


userComponents['inputBoxLabel'] = (props) => {
  return new Create('label')
    .class({})
  //.css({})
  //.attrs({});
};

userComponents['inputBoxSubLabel'] = (props) => {
  return new Create('span')
    .class({
      class1: 'helper'
    })
  //.css({})
  //.attrs({});
};

userComponents['inputBoxSubLabelError'] = (props) => {
  return new Create('span')
    .class({
      class1: 'error'
    })
  //.css({})
  //.attrs({});
};
//=========Loading Animation========

userComponents['loading'] = (props) => {
  return new Create('progress')
    .class({
      class1: 'circle'
    })
  //.css({})
  //.attrs({});
};
//==========sapce=======
userComponents['space'] = (props) => {
  return new Create('div')
    .class({
      class1: 'space'
    })
  //.css({})
  //.attrs({});
};


//========max=======


userComponents['max'] = (props) => {
  return new Create('div')
    .class({
      class1: 'max'
    })
  //.css({})
  //.attrs({});
};

//======helper,error for gloabl ======

userComponents['helper'] = (props) => {
  return new Create('span')
    .class({
      class1: 'helper'
    })
  //.css({})
  //.attrs({});
};

userComponents['error'] = (props) => {
  return new Create('error')
    .class({
      class1: 'helper'
    })
  //.css({})
  //.attrs({});
};

// select


userComponents['selectBox'] = (props) => {
  return new Create('div')
    .class({
      class1: 'field',
      class2: 'label',
      class3: 'border'
    })
  //.css({})
  //.attrs({});
};

//=====seekbar=====
userComponents['seekbar'] = (props) => {
  return new Create('label')
    .class({
      class1:"slider"
    })
   .html(`  <input type="range" value="5" min="4" max="8">
  <span></span>
  <div class="tooltip"></div>`)
  //.css({})
  //.attrs({});
};

userComponents['seekbarLeft'] = (props) => {
  return new Create('i')
    .class({})
  //.css({})
  //.attrs({});
};
userComponents['seekbarRight'] = (props) => {
  return new Create('i')
    .class({})
  //.css({})
  //.attrs({});
};

//==========switch=======

userComponents['switchBox'] = (props) => {
  return new Create('label')
    .class({
      class1: 'switch'
    })
  //.css({})
  //.attrs({});
};
userComponents['switch'] = (props) => {
  return new Create('input')
    .class({
    })
  //.css({})
  .attrs({
    type:"checkbox",
  });
};