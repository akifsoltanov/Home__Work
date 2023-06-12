const persons = [{
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
]



// ***MAP***

// 1. Get the array of all names
// const maps = persons.map(person => {
//     return {
//         personNames: `${person.name}`
//     }
// })
// console.log(maps)


// 2. Get the array of all heights
// const maps = persons.map(person => {
//     return {
//         personHeights: `${person.height}`
//     }
// })
// console.log(maps)


// 3. Get the array of objects with just name and height properties
// const maps = persons.map(person => {
//     return {
//         namesHeights: `${person.name} ${person.height}`
//     }
// })
// console.log(maps)


// 4. Get the array of all first names
// const maps = persons.map((person) => person.name)
// const splitArr = maps.map((item) => item.split(' '))
// const lastMap = splitArr.map((item) => item[0])

// console.log(maps);
// console.log(splitArr);
// console.log(lastMap);


// ***FILTER***

// 1. Get characters with a mass greater than 100
// console.log(persons.filter(person => person.mass > 100))


// 2. Get characters with a height of less than 200
// console.log(persons.filter(person => person.height < 200))


// 3. Get all male characters
// console.log(persons.filter(person => person.gender === 'male'))


// 4. Get all female characters
// console.log(persons.filter(person => person.gender === 'female'))



// ***SORT***

// 1. Sort by mass
// persons.sort((a, b) => {
//     return a.mass - b.mass;
// });
// console.log(persons);


// 2. Sort by height
// persons.sort((a, b) => {
//     return a.height - b.height;
// });
// console.log(persons);


// 3. Sort by name
// persons.sort(function (a, b) {
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     return 0;
// });

// console.log(persons);


// 4. Sort by gender
// persons.sort(function (a, b) {
//     if (a.gender < b.gender) {
//         return -1
//     } else if (a.gender > b.gender) {
//         return 1
//     }
// });

// console.log(persons);



// ***EVERY***

// 1. Does every character have blue eyes?
// console.log(persons.every(person => person.eye_color === 'blue'))


// 2. Does every character have a mass of more than 40?
// console.log(persons.every(person => person.mass > 40))


// 3. Is every character shorter than 200?
// console.log(persons.every(person => person.height < 200))


// 4. Is every character male?
// console.log(persons.every(person => person.gender === "male"))



// ***SOME***

// 1. Is there at least one male character?
// const arr = persons.some(person => person.gender === 'male')
// console.log(arr)


// 2. Is there at least one character with blue eyes?
// const arr = persons.some(person => person.eye_color === 'blue')
// console.log(arr)


// 3. Is there at least one character taller than 210?
// const arr = persons.some(person => person.height > 210)
// console.log(arr)


// 4. Is there at least one character that has a mass of less than 50?
// const arr = persons.some(person => person.mass < 50)
// console.log(arr)