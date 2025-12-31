import mySql from 'mysql2/promise'

export const dataInfo=mySql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    database: 'hospital_info',
    password:'Priya7668@'
})