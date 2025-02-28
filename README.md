# WorkforcePro

WorkforcePro is a command-line application designed to help businesses efficiently manage their employee database. Using Node.js, Inquirer, and PostgreSQL, WorkforcePro allows users to add, view, and update employee records, job roles, and departments within an organization. This application streamlines workforce management by providing an intuitive interface to interact with employee data.

Features
📋 View All Employees – Display a formatted table of all employees, their roles, salaries, departments, and managers.
🏢 Manage Departments – Add and view company departments.
💼 Manage Roles – Add new job roles and view existing ones.
👥 Manage Employees – Add new employees and update employee roles.
🔄 Persistent Data Storage – Uses PostgreSQL to securely store and retrieve employee data.

## Installation

1. Clone the repository:
   
   git clone https://github.com/yourusername/workforcepro.git
   cd workforcepro

2. Install dependencies:
   npm install

3. Set up your PostgreSQL database:
   - Create a `.env` file in the root directory and add:
     ```env
     DB_USER=your_username
     DB_PASSWORD=your_password
     DB_HOST=localhost
     DB_PORT=5432
     DB_NAME=workforcepro_db
     ```
   - Ensure PostgreSQL is running and create the database using the provided schema.

## Usage

1. Start the application:
   node index.js
  
2. Use the interactive menu to manage employees, roles, and departments.

## Technologies Used
- Node.js
- Inquirer
- PostgreSQL

## License
This project is licensed under the MIT License.



