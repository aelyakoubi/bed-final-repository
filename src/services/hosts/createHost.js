// createHost.js
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
    if (
      error instanceof Error &&
      error.code === "P2002" &&
      error.meta?.target?.includes("username")
    ) {
      throw new Error(`Username '${username}' is already taken for hosts.`);
    } else {
      console.error(`Host creation error: ${error.message}`);
      throw new Error(`Error creating host: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default createHost;
