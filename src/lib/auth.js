import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "mongodb://localhost:27017/"; // your mongodb client

console.log(client);

export const auth = betterAuth({
    database: mongodbAdapter(client),
});