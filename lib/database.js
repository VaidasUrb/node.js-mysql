//susijungimas MySQL duomenu baze
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classicmodels'
});

connection.connect(function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log('Prisijungimas sekmingas')
    }
});

module.exports = connection;