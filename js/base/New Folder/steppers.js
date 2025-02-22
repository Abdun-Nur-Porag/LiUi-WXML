const steppers=()=>create("nav")
const steppersItem=()=>create("button").class({
  shape:"circle",
  size:"small"
})
const steppersItemEnable = () => create("i")
const steppersSpace=()=>create("hr").class({
  size:"max"
})
const steppersDisable=()=>create("button").class({
  shape: "circle",
  size: "small"
}).attrs({
  
})