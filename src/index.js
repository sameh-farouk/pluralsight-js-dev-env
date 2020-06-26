import {getUsers, delUser} from './api/userApi';

getUsers().then(res => {
  const tbody = document.getElementById('users')
  res.forEach(user => {
    const row = document.createElement('tr');
    const delLink = document.createElement('td');
    delLink.innerHTML = `<a href="#" class="deleteUser" data-id="${user.id}">Delete</a>`
    row.appendChild(delLink);
    for (let nfo of Object.entries(user)) {
      const cell = document.createElement('td');
      cell.innerText = nfo[1];
      row.appendChild(cell)
    }
    tbody.appendChild(row);
  })
  const deleteLinks = document.getElementsByClassName('deleteUser');
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      event.preventDefault();
      const element = event.target;
      delUser(element.attributes["data-id"].value);
      const row = element.parentElement.parentElement;
      row.parentNode.removeChild(row);
    }
  })
})
