const routing = async (name) => {
  switch (name) {
    case "app":
      try {
        await renderXML('app.xml', "body");
      } catch (error) {
        console.warn(`Your XML file ${name}.xml not found.`);
      }
      break;
      
    case "about":
      try {
        await renderXML('about.xml', "body");
      } catch (error) {
        console.warn(`Your XML file ${name}.xml not found.`);
      }
      break;
      
    case "contact":
      try {
        await renderXML('contact.xml', "body");
      } catch (error) {
        console.warn(`Your XML file ${name}.xml not found.`);
      }
      break;
      
    default:
      console.warn(`Route "${name}" not found.`);
      break;
  }
};
// useing
/*

routing(name)

example:
routing("home")
*/