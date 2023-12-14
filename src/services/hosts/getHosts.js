import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getHosts = async (name) => {
  try {
    const hosts = await prisma.host.findMany({
      where: name ? { name: { contains: name } } : undefined,
    });

    return hosts;
  } catch (error) {
    throw new Error(`Error in getHosts service: ${error.message}`);
  }
};

export default getHosts;
