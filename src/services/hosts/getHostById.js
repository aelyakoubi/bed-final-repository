import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getHostById = async (hostId) => {
  try {
    const host = await prisma.host.findUnique({ where: { id: hostId } });
    return host;
  } catch (error) {
    throw new Error(`Error in getHostById service: ${error.message}`);
  }
};

export default getHostById;
