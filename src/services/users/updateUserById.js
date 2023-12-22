import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateUserById = async (userId, updatedUserData) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updatedUserData,
    });

    return updatedUser;
  } catch (error) {
    if (
      error instanceof Error &&
      error.code === "P2025"
    ) {
      return null; // User / specified ID / not found
    } else {
      throw new Error(`Error in updating user: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default updateUserById;
