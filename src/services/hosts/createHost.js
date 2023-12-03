import { PrismaClient } from "@prisma/client";

const createHost = async (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture,
  aboutMe,
  res
) => {
  const prisma = new PrismaClient();

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

    // Send JSON response
    res.status(201).json(host);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error("Error creating host:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after the operation
  }
};

export default createHost;
