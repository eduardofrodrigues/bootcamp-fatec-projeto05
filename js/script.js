let alunos = [
  {
    id: 1,
    name: "Eduardo Rodrigues",
    email: "contatoeduardofelipe@hotmail.com",
    phone: "(15) 99999-9999",
    course: "Java",
    shift: "Manhã"
  },
  {
    id: 2,
    name: "Eduardo Rodrigues",
    email: "contatoeduardofelipe@hotmail.com",
    phone: "(15) 99999-9999",
    course: "Angular",
    shift: "Manhã"
  },
  {
    id: 3,
    name: "Eduardo Rodrigues",
    email: "contatoeduardofelipe@hotmail.com",
    phone: "(15) 99999-9999",
    course: "HTML",
    shift: "Manhã"
  }
]

alunos.forEach((student) => {
  addRow(student);
})

function addRow(data) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML += `
    <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td class="d-none d-md-table-cell">${data.email}</td>
        <td class="d-none d-md-table-cell">${data.phone}</td>
        <td class="d-none d-md-table-cell">${data.course}</td>
        <td class="d-none d-md-table-cell">${data.shift}</td>
    </tr>
  `
}

addRow();