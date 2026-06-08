let employees = [
  {
    name: "Akif",
    surname: "Soltanov",
    age: 23,
    date: 2021,
    salary: 500,
    company: "ANCGROUP",
  },
  {
    name: "Mehemmed",
    surname: "Dadasov",
    age: 19,
    date: 2023,
    salary: 500,
    company: "ANCGROUP",
  },
  {
    name: "Aga",
    surname: "Mehdiyev",
    age: 24,
    date: 2020,
    salary: 500,
    company: "ANCGROUP",
  },
];

function getEmployeeInfo(arr) {
  let container = document.getElementById("employees");

  for (let i = 0; i < arr.length; i++) {
    container.innerHTML += `
            <p>
                Ad: ${arr[i].name} <br>
                Soyad: ${arr[i].surname} <br>
                Yaş: ${arr[i].age} <br>
                İl: ${arr[i].date} <br>
                Maaş: ${arr[i].salary} <br>
                Şirkət: ${arr[i].company}
            </p>
            <hr>
        `;
  }
}

getEmployeeInfo(employees);
