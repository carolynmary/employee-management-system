const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.query(
            "SELECT emp.employee_id, emp.first_name, emp.last_name, title, department, salary, CONCAT(mgr.first_name, ' ', mgr.last_name) AS manager FROM employees emp LEFT JOIN roles USING(role_id) LEFT JOIN departments USING(dept_id) LEFT JOIN employees mgr ON mgr.employee_id = emp.manager_id ORDER BY emp.employee_id;"
        )
    }

    // findAllEmployeesByDept() {
    //     return this.connection.query(
    //         "SELECT employee_id, first_name, last_name, title, department, salary, manager_id AS manager FROM employees 
    //         WHERE dept_id="${}"
    //         JOIN roles USING(role_id) JOIN departments USING(dept_id) ORDER BY last_name;"
    //     )
    // }

    // findAllRoles() {
    //     return this.connection.query("SELECT role_id, title, salary, dept_id AS department FROM roles JOIN departments USING(dept_id);")
    //     // ORDER BY role_id
    // }

    // findAllDepartments() {
    //     return this.connection.query("SELECT * FROM departments")
    // }

    // createEmployee() {
    //     return this.connection.query("SELECT * FROM departments")
    // }

}

module.exports = new DB(connection);