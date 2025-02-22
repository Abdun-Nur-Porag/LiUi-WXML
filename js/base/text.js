// Text
userComponents['Text'] = (props) => {
  return new create("text")
    .text(props.text || "Text")
    .attrs(props)
    .style({
      padding: "auto",
      backgroundColor: props.backgroundColor,
      color: props.color || "black"
      
    });
};