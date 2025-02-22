const dialogDefault=()=>create("dialog")
const dialogBody=()=>create("div")
//model dialog
const dialogModel=()=>create("dialog").class({
  type:"modal"
})
const dialogFullScreen=()=>create("dialog").class({
  type:"max"
})
const dialogTop=()=>create("dialog").class({
  type:"top"
})
/*=========Dialog Bottom not working avoid it========*/
const dialogBottom=()=>create("dialog").class({
  type:"bottom"
})
/*********/
const dialogLeft=()=>create("dialog").class({
  type:"left"
})
const dialogRight=()=>create("dialog").class({
  type:"right"
})
