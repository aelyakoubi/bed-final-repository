// getUsers.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = async (email, username) => {
  try {
    console.log("Searching for users with email:", email, "and username:", username);

    const users = await prisma.user.findMany({
      where: {
        email: {
          contains: email || undefined,
        },
        username: {
          contains: username || undefined,
        },
      },
    });

    console.log("Found users:", users);

    return users;
  } catch (error) {
    console.error("Error in getUsers service:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default getUsers;
