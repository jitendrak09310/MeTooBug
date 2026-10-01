"use server";

import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import z, { email, success } from "zod";

import { db } from "@/db";
import { users } from "@/db/schema";
import { error } from "console";

// this is like th request schema in java and z -- zod handles the
// validation here.
const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be atleast 2 characters")
    .max(100, "Name is too Long."),

  email: z.string().min(8, "Password must be atleast 8 Characters."),

  password: z.string().min(8, "Password must be atleast 8 Characters."),
});

export async function registerUser(
  prevState: {
    error?: string;
    success?: string;
  },
  formData: FormData,
) {
  const result = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!result.success) {
    return {
      error: result.error.issues[0].message,
    };
  }

  const { name, email, password } = result.data;

  const normalizedEmail = email.toLowerCase().trim();

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, normalizedEmail))
    .limit(1);

  if (existingUser.length > 0) {
    return {
      error: " An account with this email already exists.",
    };
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await db.insert(users).values({
    name,
    email: normalizedEmail,
    passwordHash,
    role: "USER",
    isActive: "true",
  });

  return {
    success: "Account created successfully!",
  };
}
