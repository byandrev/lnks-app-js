async function getUser(token) {
  const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
  });
        
  const data = await fetch("http://127.0.0.1:8000/login/me", {
    method: 'GET',
    headers: myHeaders,
  });
  return await data.json();
}

async function getLinks(token) {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
      
  const data = await fetch("http://127.0.0.1:8000/links", {
    method: 'GET',
    headers: myHeaders,
  });
  return await data.json();
}

// Retorna un elemento HTML con la vista DASHBOARD
async function Dashboard() {
  // Creo el elemento HTML
  const html = document.createElement("div");

  const token = localStorage.getItem("token");
  const user = await getUser(token);
  console.log(user)

  // Actualizo el contenido HTML
  if (!user.hasOwnProperty("username")) {
    html.innerHTML = "<p>No has iniciado seción</p>";
  } else {
    html.innerHTML = `
        <h1>Dashboard</h1>
        <p>Bienvenido, ${user.username}</p>
        <div id="links"></div>
    `;

    // Eventos
    const linksElement = html.querySelector("#links");
    const links = await getLinks(token);
    console.log(links)

    links.forEach(link => {
      linksElement.innerHTML += renderLink(link.url, link.tags);
    })
  }

  return html;
}

// Crear un HTML para cada Link
function renderLink(url, tags) {
  return `<div>
        <p><a href=${url}>${url}</a></p>
        <p>${tags}</p>
    </div>`;
}

export default Dashboard;
