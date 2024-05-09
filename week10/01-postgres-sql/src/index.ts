import { Client } from "pg";

const client = new Client({
  host: "postgresql://polakisaikiran1:Da4ZxwbvklM0@ep-square-leaf-a5tbp99z.us-east-2.aws.neon.tech/TestAmatarasu?sslmode=require",
  port: 5534,
  database: "TestAmatarasu",
  user: "polakisaikiran1",
  password: "Da4ZxwbvklM0",
});

client.connect();
