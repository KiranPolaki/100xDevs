import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://polakisaikiran1:Da4ZxwbvklM0@ep-square-leaf-a5tbp99z.us-east-2.aws.neon.tech/TestAmatarasu?sslmode=require",
});

// ! This can lead to SQL injections - don't let user inputed creds get directly into the data base
// ! The issue is that line 23 is a query so if the user passes ;DELETE * FROM USERS; sql will treate it as a new query
(async function () {
  const res = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `);
  console.log("res", res);
  try {
    await client.connect();
    const insertQuery =
      "INSERT INTO users (username,email,password) VALUES ('xai','xaik@gmail.com','whatever')";
    const res = await client.query(insertQuery);
    console.log("Insertion success", res);
  } catch (error) {
    console.log("Error", error);
  } finally {
    await client.end();
  }
})();
