import db from "./db.js"; // Ensure db.js is imported
import inquirer from "inquirer"; // Add missing import
import { mainMenu } from "./index.js";  // ✅ Import mainMenu


// Add a department
export const addDepartment = async (mainMenu) => {
    const { name } = await inquirer.prompt([
      { type: "input", name: "name", message: "Enter department name:" },
    ]);
  
    try {
      await db.query("INSERT INTO department (name) VALUES ($1)", [name]);
      console.log(`Added department: ${name}`);
    } catch (err) {
      console.error("Error adding department", err);
    } finally {
      mainMenu();
    }
  };
  

// Add a role
export const addRole = async () => {
    const { title, salary, departmentId } = await inquirer.prompt([
      { type: "input", name: "title", message: "Enter role title:" },
      { type: "input", name: "salary", message: "Enter role salary:" },
      { type: "input", name: "departmentId", message: "Enter department ID:" },
    ]);

    try {
      await db.query("INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)", [
        title, salary, departmentId,
      ]);
      console.log(`Added role: ${title}`);
    } catch (err) {
      console.error("Error adding role", err);
    } finally {
      mainMenu();
    }
};

// Add an employee
export const addEmployee = async () => {
    const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
      { type: "input", name: "firstName", message: "Enter first name:" },
      { type: "input", name: "lastName", message: "Enter last name:" },
      { type: "input", name: "roleId", message: "Enter role ID:" },
      { type: "input", name: "managerId", message: "Enter manager ID (or leave blank for none):" },
    ]);

    try {
      await db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)", [
        firstName, lastName, roleId, managerId || null,
      ]);
      console.log(`Added employee: ${firstName} ${lastName}`);
    } catch (err) {
      console.error("Error adding employee", err);
    } finally {
      mainMenu();
    }
};

// Update employee role
export const updateEmployeeRole = async () => {
    const { employeeId, newRoleId } = await inquirer.prompt([
      { type: "input", name: "employeeId", message: "Enter employee ID:" },
      { type: "input", name: "newRoleId", message: "Enter new role ID:" },
    ]);

    try {
      await db.query("UPDATE employee SET role_id = $1 WHERE id = $2", [newRoleId, employeeId]);
      console.log(`Updated employee ID ${employeeId} to role ID ${newRoleId}`);
    } catch (err) {
      console.error("Error updating employee role", err);
    } finally {
      mainMenu();
    }
};

// View all departments
export const viewAllDepartments = async () => {
    try {
      const result = await db.query("SELECT * FROM department");
      console.table(result.rows);
    } catch (err) {
      console.error("Error fetching departments", err);
    } finally {
      mainMenu();
    }
};

export const viewAllEmployees = async () => {
    try {
      const result = await db.query(`
        SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, 
        CONCAT(m.first_name, ' ', m.last_name) AS manager
        FROM employee e
        LEFT JOIN role r ON e.role_id = r.id
        LEFT JOIN department d ON r.department_id = d.id
        LEFT JOIN employee m ON e.manager_id = m.id
      `);
      console.table(result.rows);
    } catch (err) {
      console.error("Error fetching employees", err);
    } finally {
      mainMenu();
    }
  };
  
  export const viewAllRoles = async () => {
    try {
      const result = await db.query("SELECT * FROM role");
      console.table(result.rows);
    } catch (err) {
      console.error("Error fetching roles", err);
    } finally {
      mainMenu();
    }
  };
  