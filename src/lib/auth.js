import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "dns/promises"
const client = new MongoClient("mongodb+srv://jony_mia:jony_mia_db@cluster0.faotqao.mongodb.net/?appName=Cluster0");
const db = client.db();
dns.setServers(["1.1.1.1", "8.8.8.8"])

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),
    emailAndPassword: {
        enabled: true
    }
});