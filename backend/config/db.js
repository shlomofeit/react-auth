import { MongoClient } from "mongodb";
import "dotenv/config";

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME || "userAuth";

let db;
let client;

async function connect() {
  const clientConn = new MongoClient(uri);
  await clientConn.connect();
  db = clientConn.db(dbName);
  console.log("Connected to MongoDB...");
  return db;
}

export async function getDb() {
  if (db) return db;
  if (!client) client = connect();
  return client;
}
