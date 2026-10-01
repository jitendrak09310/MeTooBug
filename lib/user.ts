import { db } from "@/db";
import { users } from "@/db/schema";

export async function getUsers() {
return await db.select().from(users);    
}