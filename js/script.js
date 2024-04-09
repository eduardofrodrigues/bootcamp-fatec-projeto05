$('#phone').mask('(00) 0000-00000');

let alunos = [
  {
    id: 1,
    name: "Eduardo Rodrigues",
    email: "contatoeduardofelipe@hotmail.com",
    phone: "(15) 9999-99999",
    course: "Java",
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
function addStudent() {

  const nameText = document.getElementById("name").value;
  const emailText = document.getElementById("email").value;
  const phoneText = document.getElementById("phone").value;
  const courseText = document.getElementById("courses").value;
  const shiftText = document.querySelector('input[name="inputRadioTurno"]:checked').value;

  const aluno = {
    id: (alunos.length + 1),
    name: nameText,
    email: emailText,
    phone: phoneText,
    course: courseText,
    shift: shiftText
  }

  alunos.push(aluno);
  addRow(aluno);

  const form = document.getElementById("formNewStudent");
  form.reset();

}