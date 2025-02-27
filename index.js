import inquirer from "inquirer";
import pg from "pg";
import dotenv from "dotenv";
import { viewAllEmployees, addEmployee, updateEmployeeRole, viewAllRoles, addRole, viewAllDepartments, addDepartment } from "./queries.js";

dotenv.config();

// Create a PostgreSQL client
const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect()
  .then(() => console.log("Connected to the database."))
  .catch((err) => console.error("Connection error", err.stack));

// Display ASCII title using console.log
console.log(`
  ======================
     Employee Tracker
  ======================
`);

// Main menu function
export const mainMenu = async () => {
  const { choice } = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Exit",
      ],
    },
  ]);

  switch (choice) {
    case "View All Employees":
      viewAllEmployees();
      break;
    case "Add Employee":
      addEmployee();
      break;
    case "Update Employee Role":
      updateEmployeeRole();
      break;
    case "View All Roles":
      viewAllRoles();
      break;
    case "Add Role":
      addRole();
      break;
    case "View All Departments":
      viewAllDepartments();
      break;
    case "Add Department":
      addDepartment(mainMenu);
      break;
    default:
      console.log("Goodbye!");
      db.end();
      process.exit();
  }
};

// Start application
mainMenu();
