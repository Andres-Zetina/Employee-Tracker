USE employee_db;

INSERT INTO department(id, name) VALUES (1, 'sales'),(2, 'Marketing'), (3, 'Engineering'),(4, 'Human Resources');

INSERT INTO role(id, title, salary, department_id) VALUES(1, "Sales Rep",'50000', 1), (2, 'Marketing Manager', '80000', 2), (3, 'Software Engineer', '90000', 3), (4, "HR Manager", "70000", 4);


INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES (1, 'John', 'Doe', 1, 1), (2, 'Jane', 'Doe', 2, 2), (3, "Lily", "Allen", 3, 3),(4, 'Andres', 'Zetina', 4, 4);