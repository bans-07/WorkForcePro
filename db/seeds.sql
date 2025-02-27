-- Insert departments
INSERT INTO department (name) VALUES 
('Engineering'), 
('Human Resources'), 
('Finance');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES 
('Software Engineer', 80000, 1), 
('HR Manager', 70000, 2), 
('Accountant', 75000, 3);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Alice', 'Johnson', 1, NULL), 
('Bob', 'Smith', 2, NULL), 
('Charlie', 'Brown', 3, 1);
