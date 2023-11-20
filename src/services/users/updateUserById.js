import { PrismaClient } from "@prisma/client";

// Create an instance of PrismaClient
const prisma = new PrismaClient();

// Function to update a user by ID
const updateUserById = async (userId, updatedUserData) => {
  try {
    // Use Prisma update method to update the user
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updatedUserData,
    });

    return updatedUser;
  } catch (error) {
    throw error;
  } finally {
    // Disconnect PrismaClient
    await prisma.$disconnect();
  }
};

export default updateUserById;
