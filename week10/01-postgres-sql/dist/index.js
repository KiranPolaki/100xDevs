"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://polakisaikiran1:Da4ZxwbvklM0@ep-square-leaf-a5tbp99z.us-east-2.aws.neon.tech/TestAmatarasu?sslmode=require",
});
// ! This can lead to SQL injections - don't let user inputed creds get directly into the data base
// ! The issue is that line 23 is a query so if the user passes ;DELETE * FROM USERS; sql will treate it as a new query
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield client.query(`
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
            yield client.connect();
            const insertQuery = "INSERT INTO users (username,email,password) VALUES ('xai','xaik@gmail.com','whatever')";
            const res = yield client.query(insertQuery);
            console.log("Insertion success", res);
        }
        catch (error) {
            console.log("Error", error);
        }
        finally {
            yield client.end();
        }
    });
})();
