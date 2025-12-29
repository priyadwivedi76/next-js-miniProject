import mySql from 'mysql2/promise'

export const database=mySql.createPool({
  host: '127.0.0.1',
  port: 3306,
    user: 'root',
    database: 'hospital_info',
    password:'Priya7668@'
})

try {
  const connection = await database.getConnection();
  //   console.log("✅ Database connected successfully.");
  connection.release(); // important to release back to pool
} catch (err) {
  console.error("❌ Database connection failed:", err);
  process.exit(1); // optional: stop server if DB is essential
}
