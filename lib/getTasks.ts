import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Function to get every single task that is created
// Finds and adds all of the data to the database
export async function getTasks() {
  return await prisma.post.findMany(); 
}
