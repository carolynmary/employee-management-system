USE employee_tracker_db;

INSERT INTO departments (department)
VALUES ("Kitchen"), ("Operations"), ("Finance");

INSERT INTO roles (title, salary, dept_id)
VALUES ("Owner", "250000", "2"), 
       ("Head Chef", "155000", "1"), 
       ("Pastry Chef", "125000", "1"), 
       ("Cook", "45000", "1"), 
       ("Host/Hostess", "30000", "2"), 
       ("Server", "45000", "2"), 
       ("Dishwasher", "45000", "2"), 
       ("Bartender", "45000", "2"), 
       ("Barback", "30000", "2"), 
       ("General Manager", "115000", "2"), 
       ("Finance Manager", "115000", "3");

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Big", "Bird", "1"), 
       ("Olive", "Oyl", "2"), 
       ("Cookie", "Monster", "3"), 
       ("Fozzie", "Bear", "4"), 
       ("Mr.", "Snuffleupagus", "4"), 
       ("Judy", "Jetson", "5"), 
       ("Fred", "Flintstone", "6"), 
       ("Elroy", "Jetson", "6"), 
       ("Tinky", "Winky", "6"), 
       ("Scooby", "Doo", "7"),
       ("Inspector", "Gadget", "8"), 
       ("Bart", "Simpson", "9"), 
       ("Papa", "Smurf", "10"), 
       ("Count", "von Count", "11");

       -- how to set the FK manager-id?? -- 