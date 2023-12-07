import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (username,password,name, email, phoneNumber, profilePicture) => {
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
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default createUser;
