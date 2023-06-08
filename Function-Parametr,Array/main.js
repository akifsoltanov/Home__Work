let employees = [{
        name: "Akif",
        surname: "Soltanov",
        age: 20,
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
]

// console.log(employees);


function getEmployeeInfo(arr) {

    for (let i = 0; i < arr.length; i++) {
        // console.log(i)
        console.log(arr[i])
        // console.log(`${arr[i]}`)
    }
}

getEmployeeInfo(employees);