// Import the PrismaClient
import { PrismaClient } from "@prisma/client";

// Create an instance of PrismaClient
const prisma = new PrismaClient();

// Function to get a user by username and password
const getUserByUsernameAndPassword = async (username, password) => {
  try {
    // Use Prisma findFirst method to get the user
    const user = await prisma.user.findFirst({
      where: { username, password },
    });

    return user;
  } catch (error) {
    throw error;
  } finally {
    // Disconnect PrismaClient
    await prisma.$disconnect();
  }
};

export default getUserByUsernameAndPassword;
