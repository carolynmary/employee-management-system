USE employee_tracker_db;

INSERT INTO departments (department)
VALUES ("Kitchen"), ("Finance"), ("Operations");

INSERT INTO roles (title, salary, dept_id)
VALUES ("Owner", 250000, 3), 
       ("Head Chef", 155000, 1), 
       ("Pastry Chef", 125000, 1), 
       ("Finance Manager", 115000, 2),
       ("General Manager", 115000, 3), 
       ("Cook", 45000, 1), 
       ("Host/Hostess", 30000, 3), 
       ("Server", 45000, 3), 
       ("Dishwasher", 45000, 3), 
       ("Bartender", 45000, 3), 
       ("Barback", 30000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Big", "Bird", 1, null), 
       ("Olive", "Oyl", 2, 1), 
       ("Cookie", "Monster", 3, 1), 
       ("Count", "von Count", 4, 1),
       ("Papa", "Smurf", 5, 1), 
       ("Fozzie", "Bear", 6, 2), 
       ("Mr.", "Snuffleupagus", 6, 2), 
       ("Judy", "Jetson", 7, 5), 
       ("Fred", "Flintstone", 8, 5), 
       ("Elroy", "Jetson", 8, 5), 
       ("Tinky", "Winky", 8, 5), 
       ("Scooby", "Doo", 9, 5),
       ("Inspector", "Gadget", 10, 5), 
       ("Bart", "Simpson", 11, 5);