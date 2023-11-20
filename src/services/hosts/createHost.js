import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createHost = async (hostData) => {
  try {
    const host = await prisma.host.create({ data: hostData });
    return host;
  } catch (error) {
    throw new Error(`Error in createHost service: ${error.message}`);
  }
};

export default createHost;
