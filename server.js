// const mysql = require("mysql");
const inquirer = require("inquirer");
const db = require("./db");
const cTable = require('console.table');

start();

// Start App Questions
function start() { // try ES6 function
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                // "View All Roles",
                // "View All Departments",
                "Update an Employee's Role",
                "Add Employee",
                "Add Role",
                "Add Department",
                "EXIT"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewAllEmployees();
                    break;

                case "View All Roles":
                    viewAllRoles();
                    break;

                case "View All Departments":
                    viewAllDepartments();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Update an Employee's Role":
                    updateRole();
                    break;

                case "EXIT":
                    break;
            }
        });
}

// working
async function viewAllEmployees() {
    const employees = await db.findAllEmployeeInfo();
    console.table("\n");
    console.table(employees);
    start();
}

// working
async function addEmployee() {
    try {
        const roles = await db.findAllRoles();
        const managers = await db.findAllEmployees();

        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "firstName",
                message: "Enter employee's first name:",
            },
            {
                type: "input",
                name: "lastName",
                message: "Enter employee's last name:",
            },
            {
                type: "list",
                name: "role",
                message: "Select employee's role:",
                choices: function () {  
                    let choiceArray = [];
                    for (var i = 0; i < roles.length; i++) {
                        choiceArray.push(roles[i].title);
                    }
                    return choiceArray;
                },
            },
            {
                type: "list",
                name: "manager",
                message: "Select employee's manager:",
                choices: function () {
                    let choiceArray = [];
                    for (var i = 0; i < managers.length; i++) {
                        choiceArray.push(`${managers[i].first_name} ${managers[i].last_name}`);
                    }
                    return choiceArray;
                }
            },
        ]);

        for (var i = 0; i < roles.length; i++) {
            if (roles[i].title === answers.role) {
                newRoleId = roles[i].role_id
            }
        }
        
        for (var i = 0; i < managers.length; i++) {
            if (`${managers[i].first_name} ${managers[i].last_name}` === answers.manager) {
                newManagerId = managers[i].employee_id;
            }
        }

        await db.createEmployee(answers, newRoleId, newManagerId);
        console.table(`\n${answers.firstName} ${answers.lastName} has been added.\n`);
        start();
    } catch (err) {
        console.log(err);
    }

}

// async function viewAllEmployeesByDept() {
//     // get all depts
//     // input dept as choices in inquirer question
//     //  view employees with department = answer
//     const departments = await db.findAllDepartments();
//     const departmentChoices = departments.map()
//         inquirer
//             .prompt({
//                 type: "list",
//                 name: "department",
//                 message: "Select a department.",
//                 choices: departmentChoices // [...departmentChoices]
//             })
//             .then(function (answer) {
//                 switch (answer.department = ------) {
//                     case "View All Employees":
//                         viewAllEmployees();
//                         break;

//                 }}

//                     findAllEmployeesByDept
//     const employees = await db.findAllEmployees();
//     console.table(employees);
//     start();
// }

// async function viewAllRoles() {
//     const roles = await db.findAllRoles();
//     console.table(roles);
//     start();
// }

// async function viewAllDepartments() {
//     const depts = await db.findAllDepartments();
//     console.table(depts);
//     start();
// }

// async function addEmployee() {
//     const depts = await db.createEmployee(); // read all info then filter/map/etc
//     const depts = await db.createEmployee();
//     console.table(depts);
//     start();
// }


// "Add Employee",
// "Add Role",
// "Add Department",
// "Update an Employee's Role",
// "EXIT"


// function artistSearch() {
//     inquirer
//         .prompt({
//             name: "artist",
//             type: "input",
//             message: "What artist would you like to search for?"
//         })
//         .then(function (answer) {
//             let query = "SELECT position, song, year FROM top5000 WHERE ?";
//             connection.query(query, { artist: answer.artist }, function (err, res) {
//                 for (var i = 0; i < res.length; i++) {
//                     console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
//                 }
//                 start();
//             });
//         });
// }



// function rangeSearch() {
//     inquirer
//         .prompt([
//             {
//                 name: "start",
//                 type: "input",
//                 message: "Enter starting position: ",
//                 validate: function (value) {
//                     if (isNaN(value) === false) {
//                         return true;
//                     }
//                     return false;
//                 }
//             },
//             {
//                 name: "end",
//                 type: "input",
//                 message: "Enter ending position: ",
//                 validate: function (value) {
//                     if (isNaN(value) === false) {
//                         return true;
//                     }
//                     return false;
//                 }
//             }
//         ])
//         .then(function (answer) {
//             var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
//             connection.query(query, [answer.start, answer.end], function (err, res) {
//                 for (var i = 0; i < res.length; i++) {
//                     console.log(
//                         "Position: " +
//                         res[i].position +
//                         " || Song: " +
//                         res[i].song +
//                         " || Artist: " +
//                         res[i].artist +
//                         " || Year: " +
//                         res[i].year
//                     );
//                 }
//                 start();
//             });
//         });
// }

// function songSearch() {
//     inquirer
//         .prompt({
//             name: "song",
//             type: "input",
//             message: "What song would you like to look for?"
//         })
//         .then(function (answer) {
//             console.log(answer.song);
//             connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function (err, res) {
//                 console.log(
//                     "Position: " +
//                     res[0].position +
//                     " || Song: " +
//                     res[0].song +
//                     " || Artist: " +
//                     res[0].artist +
//                     " || Year: " +
//                     res[0].year
//                 );
//                 start();
//             });
//         });
// }

// function songAndAlbumSearch() {
//     inquirer
//         .prompt({
//             name: "artist",
//             type: "input",
//             message: "What artist would you like to search for?"
//         })
//         .then(function (answer) {
//             var query = "SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist ";
//             query += "FROM top_albums INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year ";
//             query += "= top5000.year) WHERE (top_albums.artist = ? AND top5000.artist = ?) ORDER BY top_albums.year, top_albums.position";

//             connection.query(query, [answer.artist, answer.artist], function (err, res) {
//                 console.log(res.length + " matches found!");
//                 for (var i = 0; i < res.length; i++) {
//                     console.log(
//                         i + 1 + ".) " +
//                         "Year: " +
//                         res[i].year +
//                         " Album Position: " +
//                         res[i].position +
//                         " || Artist: " +
//                         res[i].artist +
//                         " || Song: " +
//                         res[i].song +
//                         " || Album: " +
//                         res[i].album
//                     );
//                 }

//                 start();
//             });
//         });
// }
