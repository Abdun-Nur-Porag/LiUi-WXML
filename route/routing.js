/*const routing = async () => {
  try {
    // Get the route parameter from the URL query string
    const params = new URLSearchParams(window.location.search);
    const name = params.get("route")?.toLowerCase() || "home"; 
    
    
    const routes = {
      "home": { xml: "/route/home.xml", title: "Home" },
      "app": { xml: "/route/app.xml", title: "App" },
      "about": { xml: "about.xml", title: "About Us" },
      "contact": { xml: "contact.xml", title: "Contact Us" }
    };
    
    
    
    
    
    
    
    

    if (routes[name]) {
      await renderXML(routes[name].xml, "body");
      document.title = `${routes[name].title}`; // Dynamic page title
      history.replaceState({ route: name }, "", `?route=${name}`); // Update URL without reload
    } else {
      console.warn(`Route "${name}" not found. Redirecting to home.`);
      history.replaceState({ route: "home" }, "", "?route=home"); // Update URL without reload
      await renderXML("home.xml", "body"); // Load home page instead
    }
  } catch (error) {
    console.error("Routing error:", error);
  }
};

// Automatically trigger routing based on URL query parameter when the page loads
window.addEventListener("DOMContentLoaded", routing);

// Handle back/forward navigation
window.addEventListener("popstate", (event) => {
  if (event.state && event.state.route) {
    routing();
  }
});
*/

const routing = async () => {
  try {
    // Get the route parameter from the URL query string
    const params = new URLSearchParams(window.location.search);
    const name = params.get("route")?.toLowerCase() || "home";

    const routes = {
      "home": { xml: "/route/home.xml", title: "Home" },
      "app": { xml: "/route/app.xml", title: "App" },
      "about": { xml: "about.xml", title: "About Us" },
      "contact": { xml: "contact.xml", title: "Contact Us" }
    };

    // Function to load a route, with fallback to 404 on error
    const loadRoute = async (xmlFile, title, routeState) => {
      try {
        await renderXML(xmlFile, "body");
        document.title = title;
        history.replaceState({ route: routeState }, "", `?route=${routeState}`);
      } catch (error) {
        console.error(`Error loading ${xmlFile}:`, error);
        // On error, load 404.html as if it were an XML file
        await renderXML("/route/error/404.xml", "body");
        document.title = "404 Not Found";
        history.replaceState({ route: "404" }, "", "?route=404");
      }
    };

    // If the route exists in our routes object, load it. Otherwise, load 404.
    if (routes[name]) {
      await loadRoute(routes[name].xml, routes[name].title, name);
    } else {
      console.warn(`Route "${name}" not found. Loading 404 page.`);
      await loadRoute("/route/error/404.xml", "404 Not Found", "404");
    }
  } catch (error) {
    console.error("Routing error:", error);
    // In case of an unexpected error, load the 404 page
    await renderXML("/route/error/404.xml", "body");
    document.title = "404 Not Found";
    history.replaceState({ route: "404" }, "", "?route=404");
  }
};

// Automatically trigger routing based on URL query parameter when the page loads
window.addEventListener("DOMContentLoaded", routing);

// Handle back/forward navigation
window.addEventListener("popstate", (event) => {
  if (event.state && event.state.route) {
    routing();
  }
});
