const list=()=>create("ul").class({
  type:"list",
  
})
const listItem=()=>create("li")

const listItemLeft=()=>create("button").class({
  type:"transparent",
  shape:"circle"
})
const listItemCenter=()=>create("div").class({
  size:"max"
})
const listItemTitle=()=>create("h6").class({
  size:"small"
})
const listItemSubTitle=()=>create("text")

const listItemRight=()=>create("label")