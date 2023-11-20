import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getHosts = async () => {
  try {
    const hosts = await prisma.host.findMany();
    return hosts;
  } catch (error) {
    throw new Error(`Error in getHosts service: ${error.message}`);
  }
};

export default getHosts;
