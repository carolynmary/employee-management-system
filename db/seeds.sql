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
VALUES ("Big", "Bird", "2"), 
       ("Olive", "Oyl", "1"), 
       ("Cookie", "Monster", "1"), 
       ("Fozzie", "Bear", "1"), 
       ("Mr.", "Snuffleupagus", "1"), 
       ("Judy", "Jetson", "2"), 
       ("Fred", "Flintstone", "2"), 
       ("Elroy", "Jetson", "2"), 
       ("Tinky", "Winky", "2"), 
       ("Scooby.", "Doo", "2"),
       ("Inspector", "Gadget", "2"), 
       ("Bart", "Simpson", "2"), 
       ("Papa", "Smurf", "2"), 
       ("Count", "von Count", "3");

       -- how to set the FK manager-id?? -- 