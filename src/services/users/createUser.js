// createUser.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture
) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
        name,
        email,
        phoneNumber,
        profilePicture,
      },
    });
    return newUser;
  } catch (error) {
    if (
      error instanceof Error &&
      error.code === "P2002" &&
      error.meta?.target?.includes("username")
    ) {
      throw new Error(`Username '${username}' is already taken.`);
    } else {
      console.error(`User creation error: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default createUser;
