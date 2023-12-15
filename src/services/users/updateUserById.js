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
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default updateUserById;
