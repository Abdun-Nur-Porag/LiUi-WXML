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
