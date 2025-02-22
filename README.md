# XML Component Summary

This XML structure defines a UI layout with various components, including navigation elements, cards, lists, menus, buttons, and form controls.

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

