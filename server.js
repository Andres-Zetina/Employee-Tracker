const mysql = require('mysql2');
const showTable = require('console.table');
const inquirer = require('inquirer')




const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'employee_db'
    },
    console.log('connected to employee_db')
);

const menu = [
    {
        type:'list',
        name: 'menu',
        message: 'What would you like to do???',
        choices: [
            "View All Employees",
            "View All Roles",
            "View All Departments",
          ],
    }
]
    

//showing the tables 
//TODO add code to show deparment table when "View All departments" is chosen 
inquirer.prompt(menu).then(({menu}) => {
    switch(menu){
        case "View All Departments":
            db.query('SELECT * FROM department', (err, data) => {
                if (err) throw err;
                console.table(data)
            });
            break;
        case "View All Roles":
            db.query('SELECT * FROM role',(err, data) => {
                if (err) throw err;  
                console.table(data)
            });
            break;
        case "View All Employees":
            db.query('SELECT * FROM employee', (err, data) => {
                if (err) throw err;
                console.table(data)
            });
            break;
    }
})


