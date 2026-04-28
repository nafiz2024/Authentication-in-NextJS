import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

let authInstance;

export const getAuth = () => {
  if (authInstance) {
    return authInstance;
  }

  const authDbUri = process.env.AUTH_DB_URI ?? process.env.MONGODB_URI;
  const authBaseUrl =
    process.env.BETTER_AUTH_URL?.trim() ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

  if (!authDbUri) {
    throw new Error(
      "Missing MongoDB connection string. Set AUTH_DB_URI or MONGODB_URI in your environment."
    );
  }

  const client = new MongoClient(authDbUri);
  const db = client.db("better-auth-db");

  authInstance = betterAuth({
    baseURL: authBaseUrl,
    emailAndPassword: {
      enabled: true,
    },

    database: mongodbAdapter(db, {
      client,
    }),
  });

  return authInstance;
};
