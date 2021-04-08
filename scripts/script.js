// Obtenemos los datos de todos los usuarios     
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => printUsers(json))
     
// Pinta todos los usuarios insertando un HTML dentro del #container
function printUsers(users) {
  const container = document.getElementById('container')
  users.forEach(user => {
    container.innerHTML = `
    ${container.innerHTML}
    <div class="card">
    <img src="img/user.png"/>
    <span>ID: ${user.id}</span>
    <h3>${user.name}</h3>
    <h4>${user.username}</h4>
    <h5>${user.email}</h4>
    </card>
  `;
  });
}
