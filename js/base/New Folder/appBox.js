//app box general
const positionBox= () => create("article")
  .class({
    main: "no-padding",
    size: "auto"
  })

const positionBoxMedium=()=>create("article")
.class({
  main:"no-padding",
  size:"medium"
})

const positionBoxSmall= () => create("article")
  .class({
    main: "no-padding",
    size: "small"
  })
const positionBoxLarge= () => create("article")
  .class({
    main: "no-padding",
    size: "large"
  })
const positionBoxExtra= () => create("article")
  .class({
    main: "no-padding",
    size: "extra"
  })
//app box top 
const positionBoxTopLeft = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "left",
    mid: "top"
  })

const positionBoxTopRight = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "right",
    mid: "top"
  })

const positionBoxTopCenter = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "center",
    mid: "top"
  })

//app box middle
const positionBoxMiddleLeft=()=>create("div")
.class({
  padding: "padding",
  abs: "absolute",
  cent: "left",
  mid: "middle"
})

const positionBoxMiddleRight=()=>create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "right",
    mid: "middle"
  })

const positionBoxMiddleCenter = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "center",
    mid: "middle"
  })
  
//app box bottom
const positionBoxBottomLeft = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "left",
    mid: "bottom"
  })

const positionBoxBottomRight = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "right",
    mid: "bottom"
  })

const positionBoxBottomCenter = () => create("div")
  .class({
    padding: "padding",
    abs: "absolute",
    cent: "center",
    mid: "bottom"
  })