import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getDb } from "../config/db.js";

const db = await getDb();
const collection = await db.collection("users");
// const getCollection = async () => {
//   return db.collection("users");
// };

export async function register({ username, email, password, role = "user" }) {
  //   const collection = await getCollection();
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

export async function login({ email, password }) {
  //   const collection = await getCollection();
  const cleanEmail = email.toLowerCase().trim();

  const user = await collection.findOne({ email: cleanEmail });
  if (!user) {
    throw Object.assign(new Error("Invalid email"), { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw Object.assign(new Error("Invalid password"), { status: 401 });
  }

  const payload = {
    id: user._id.toString(),
    username: user.username,
    email: cleanEmail,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });
  return token;
}
