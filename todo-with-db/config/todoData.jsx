import mySql2 from 'mysql2/promise'

const dataInfo=mySql2.createPool({
    user:'root',
    host: '127.0.0.1',
    port: 3306,
    database:'todoInfo',
    password:'Priya7668@'

})

export default dataInfo