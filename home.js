import { setView } from "./views.js";

// Retorna un elemento HTML con la vista HOME
function Home() {
    // Creo el elemento HTML
    const html = document.createElement("div");

    // Actualizo el contenido HTML
    html.innerHTML = `
        <h1>Lnks App</h1>
        <button id="btn-login">Login</button>
        <button id="btn-signup">Sign Up</button>
    `;

    // Eventos
    const btnLogin = html.querySelector("#btn-login");
    btnLogin.addEventListener("click", function(e){
        setView("login");
    })

    return html;
}

export default Home;