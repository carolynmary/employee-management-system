const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.query(
            "SELECT employee_id, first_name, last_name, title, department, salary, manager_id AS manager FROM employees e JOIN roles r USING(role_id) JOIN departments d USING(dept_id) ORDER BY last_name;"
            // ORDER BY dept_name
        )
    }

    // findAllRoles() {
    //     return this.connection.query("SELECT * FROM roles")
    // }

    // findAllDepartments() {
    //     return this.connection.query("SELECT * FROM departments")
    // }

    // createEmployee() {
    //     return this.connection.query("SELECT * FROM departments")
    // }

}

module.exports = new DB(connection);