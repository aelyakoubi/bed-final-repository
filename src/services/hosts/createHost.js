import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createHost = async (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture,
  aboutMe
) => {
  try {
    const host = await prisma.host.create({
      data: {
        username,
        password,
        name,
        email,
        phoneNumber,
        profilePicture,
        aboutMe,
      },
    });

    return host;
  } catch (error) {
    throw new Error(`Error in createHost service: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
};

export default createHost;
