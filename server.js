const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const showTable = require('console.table');
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json);

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_db'
    },
    console.log('connected to employee_db')
);

const menu = () => {
    inquirer.prompt(
        {
            
        }
    )
}