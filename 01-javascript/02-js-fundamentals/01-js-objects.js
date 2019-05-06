// 30 minutes max

// Challenge 1
// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.
// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];

// Your console should look like the following when the function is called with the provided array.

// Name: Remy, Cohort: Jan
// Name: Genevieve, Cohort: March
// Name: Chuck, Cohort: Jan
// Name: Osmund, Cohort: June
// Name: Nikki, Cohort: June
// Name: Boris, Cohort: June

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (var i=0; i<students.length; i++){
    console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort);
}

console.log("END CHALLENGE 1\n\nBEGIN CHALLENGE 2");

//################################################
// Challenge 2
// Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.

// let users = {
//     employees: [
//         {'first_name':  'Miguel', 'last_name' : 'Jones'},
//         {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
//         {'first_name' : 'Nora', 'last_name' : 'Lu'},
//         {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
//     ],
//     managers: [
//        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
//        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
//     ]
//  };
// copy
// Your console should look like the following:

// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

console.log("EMPLOYEES")
var numThrough =0
//console.log(users.employees.length);
for(i=0; i<users.employees.length; i++){
    var stringBuilder = String(i +1);
    stringBuilder += " - " + users.employees[i].last_name.toUpperCase();
    stringBuilder += ", " + users.employees[i].first_name.toUpperCase();
    stringBuilder += " - " + String(parseInt(users.employees[i].first_name.length) + parseInt(users.employees[i].last_name.length));
    console.log(stringBuilder);
}
console.log("MANAGERS")
//console.log(users.managers.length);
for(i=0; i<users.managers.length; i++){
    var stringBuilder = String(i +1);
    stringBuilder += " - " + users.managers[i].last_name.toUpperCase();
    stringBuilder += ", " + users.managers[i].first_name.toUpperCase();
    stringBuilder += " - " + String(parseInt(users.managers[i].first_name.length) + parseInt(users.managers[i].last_name.length));
    console.log(stringBuilder);
}


