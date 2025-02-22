
userComponents["Button"]=(_given_)=>{
  return new create("button")
 .text(_given_.text || "Button")
.class({
  is_ripple:"ripple"
})
 
}
