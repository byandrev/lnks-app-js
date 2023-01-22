import Home from "./home.js";
import Dashboard from "./dashboard.js";
import Login from "./login.js";

// Objecto donde la key es el nombre de la vista y 
// el value es un elemento HTML de la vista

// Actualiza el contenido del elemento #app
async function setView(view) {
    const views = {
        "home": Home(),
        "dashboard": await Dashboard(),
        "login": Login()
    };
    
    // Guardamos el elemento #app
    const app = document.getElementById("app");

    // Limpia el elemento app
    app.innerHTML = "";

    // Agrega un elemento dentro de #app
    app.appendChild(views[view]);
}


export {
    setView
}