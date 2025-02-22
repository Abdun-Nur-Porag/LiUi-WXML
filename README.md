 # LiUi XML Documention
 
 Material Design In Web.
 
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JS](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![XML](https://img.shields.io/badge/XML-%23ff6600.svg?style=flat&logo=xml&logoColor=white)](https://www.w3.org/XML/)

[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![Material Design](https://img.shields.io/badge/Material%20Design-%230081CB.svg?style=flat&logo=material-design&logoColor=white)](https://m3.material.io/)
[![React Router](https://img.shields.io/badge/React%20Router-%2361DAFB.svg?style=flat&logo=react&logoColor=white)](https://reactrouter.com/)



This XML structure defines a UI layout with various components, including navigation elements, cards, lists, menus, buttons, and form controls.
## [See Demo](https://liui-xml-doc.netlify.app/ "Hover text here")


![My Image](/img/example.png)
Features:
- Easy Routing Features withOut Node Js
- App ui in web
- Prebuilt Component
- Easy Use
- Fastest Material Design
- Support User Built Componet With widget_maker.html


## Installation
Add this given tag in your html file.
Or Download This Repository then open** index.html**
```
<link rel="stylesheet" href="/css/beer.min.css">
  <script type="module" src="/js/beer.min.js"></script>
  <script src="/route/routing.js"></script>
  <script src="/js/globalCom.js"></script>
  <script src="/js/lithium.xml.js"></script>

```

## Components Overview

### 1. **JavaScript Import**
```xml
<use com="/js/base/widgets.js"/>
```
Imports external JavaScript functionality.

### 2. **App Bar**
```xml
<appBar>
  <appBarBody>
    <appBarBodyLeft>Left</appBarBodyLeft>
    <appBarBodyCenter>Center</appBarBodyCenter>
    <appBarBodyRight>Right</appBarBodyRight>
  </appBarBody>
</appBar>
```
A top navigation bar with left, center, and right sections.

### 3. **Card**
```xml
<card>
  This is a card
</card>
```
Displays a simple card with text.

### 4. **List**
```xml
<list>
  <listItem>
    <listItemLeft><i>home</i></listItemLeft>
    <listItemCenter>
      <listItemTitle>Go Home</listItemTitle>
      <listItemSubTitle>Go to home now</listItemSubTitle>
    </listItemCenter>
    <listItemRight><i>download</i></listItemRight>
  </listItem>
</list>
```
A structured list with icons, titles, and subtitles.

### 5. **Menu**
```xml
<menu>
  <menuTitle>Country</menuTitle>
  <menuBody>
    <menuItem>BD</menuItem>
    <menuItem>USA</menuItem>
  </menuBody>
</menu>
```
A dropdown menu with selectable options.

### 6. **Buttons**
```xml
<button>Click Me</button>
<outlinedButton>Outlined</outlinedButton>
<fabButton class="round">
  <fabButtonIcon>Home</fabButtonIcon>
  <fabButtonText>Go Home</fabButtonText>
</fabButton>
<buttonCircleTransparent>
  <icon>home</icon>
</buttonCircleTransparent>
```
Various button styles including standard, outlined, floating action, and circular transparent.

### 7. **Popup**
```xml
<button data-ui="#show">Click to popup</button>
<popup id="show">This is a popup</popup>
```
A modal popup triggered by a button.

### 8. **Steppers**
```xml
<steppers>
  <steppersItem>
    <steppersItemEnable>settings</steppersItemEnable>
  </steppersItem>
</steppers>
```
Step indicators for navigation.

### 9. **Position Box**
```xml
<positionBoxLarge>
  <positionBoxTopLeft>Position Left</positionBoxTopLeft>
  <positionBoxTopRight>Position Right</positionBoxTopRight>
</positionBoxLarge>
```
Elements positioned in different areas of the UI.

### 10. **Alignment Elements**
```xml
<alignLeft>Align Left</alignLeft>
<alignRight>Align Right</alignRight>
<alignCenter>Align Center</alignCenter>
```
Text alignment components.

### 11. **Checkbox**
```xml
<checkbox>
  <checkboxText>Yes</checkboxText>
</checkbox>
```
A checkbox with a label.

### 12. **Chip**
```xml
<chip>
  <i>home</i>
  <chipText>Hi</chipText>
</chip>
```
An icon-based chip with text.

### 13. **Details Section**
```xml
<details>
  <detailsTitle>Show Me More</detailsTitle>
  <detailsText>Hello, this is details text. You see more about it.</detailsText>
</details>
```
Expandable content with a title and description.

### 14. **Layouts**
```xml
<verticalLayout>
  <button>Hi</button>
  <horizontalLayout>
    <button>Hi</button>
  </horizontalLayout>
</verticalLayout>
```
Organizes elements in vertical and horizontal layouts.

### 15. **Input Fields**
```xml
<inputBox class="prefix,border">
  <icon>email</icon>
  <input type="text"/>
  <inputBoxLabel>Name</inputBoxLabel>
  <inputBoxSubLabelError>Sorry</inputBoxSubLabelError>
</inputBox>
```
An input box with an icon, label, and error message support.

### 16. **Progress Indicator**
```xml
<progress></progress>
```
A simple loading progress bar.

### 17. **Loading Button**
```xml
<button>
  <loading class="small"></loading>
  Loading
</button>
```
A button with a loading animation.

### 18. **Dropdown (Select Box)**
```xml
<selectBox class="suffix,small">
  <select>
    <option>BD</option>
    <option>USA</option>
  </select>
  <label>Country</label>
  <helper>Select your country</helper>
</selectBox>
```
A select box for choosing options.

### 19. **Seekbar & Switch**
```xml
<seekbar/>
<switchBox class="icon">
  <switch></switch>
  <span>
    <i>wifi</i>
  </span>
</switchBox>
```
Range selection and toggle switch with an icon.

