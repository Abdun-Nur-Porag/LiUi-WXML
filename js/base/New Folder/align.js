/*======genenral align=====*/
const alignLeft=()=>create("article").class({
  leftAlign:"left-align"
})
const alignTopLeft=()=>create("article").class({
  leftAlign: "left-align",
  top:"top-align"
})
const alignBottomLeft=()=>create("article").class({
  leftAlign: "left-align",
  bottom:"bottom"
})
/*=====right====*/
const alignRight=()=>create("article").class({
  rightAlign: "right-align"
})
const alignTopRight=()=>create("article").class({
  rightAlign: "right-align",
  top:"top"
})
const alignBottomRight=()=>create("article").class({
  rightAlign: "right-align",
  bottom:"bottom"
})
/*=====center middle===*/
const alignCenter=()=>create("article").class({
  rightAlign: "center-align",
middle:"middle-align"
})
const alignCenterLeft=()=>create("article").class({
  rightAlign: "left-align",
  middle:"middle-align"
})
const alignCenterRight=()=>create("article").class({
  leftAlign: "right-align",
  middle:"middle-align"
})
