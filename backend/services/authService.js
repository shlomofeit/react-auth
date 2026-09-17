import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getDb } from "../config/db.js";

const getCollection = async () => {
  const db = await getDb();
  return db.collection("users");
};

export async function register({ username, email, password, role = "user" }) {
  const collection = await getCollection();
  const cleanEmail = email.toLowerCase().trim();

  const existUser = await collection.findOne({ email: cleanEmail });
  if (existUser) {
    throw Object.assign(new Error("Email already exist"), { status: 409 });
  }

  const hashPassword = await bcrypt.hash(password, 12);
  const result = await collection.insertOne({
    username,
    email: cleanEmail,
    password: hashPassword,
    role,
  });
  return result.insertedId.toString();
}
