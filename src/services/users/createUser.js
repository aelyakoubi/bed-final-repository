import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (id, username, name, email, phoneNumber, profilePicture, password, image) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        id,
        username,
        name,
        email,
        phoneNumber,
        profilePicture,
        password,
        image,
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
