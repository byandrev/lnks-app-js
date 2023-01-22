import { setView } from "./views.js";

// Retorna un elemento HTML con la vista LOGIN
function Login() {
    // Creo el elemento HTML
    const html = document.createElement("div");

    // Actualizo el contenido de la etiqueta creada anteriormente
    html.innerHTML = `
        <h1>Login</h1>
        <form id="form-login">
            <input id="form-email" type="email" placeholder="Email" />
            <input id="form-password" type="password" placeholder="Password" />
            <button id="form-login-btn">Login</button>
        </form>
    `;

    // Agrego eventos
    const form = html.querySelector("#form-login");
    form.addEventListener("submit", function(event) {
        // para no recargar la pagina
        event.preventDefault();
        
        console.log("loggin...");

        const email = html.querySelector("#form-email");
        const password = html.querySelector("#form-password");

        console.log(email.value)
        console.log(password.value)

        const data = {
            username: email.value,
            password: password.value
        }

        // Peticion al server
        fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${data.username}&password=${data.password}`
        })
            .then(res => res.json())
            .then(data => {
                if (!data.hasOwnProperty("access_token")) {
                    alert("No te has loggeado")
                    return;
                }

                // Nos devuelve el Token
                localStorage.setItem("token", data.access_token);
                setView("dashboard");
                console.log(data)
            })
    });

    return html;
}

export default Login;