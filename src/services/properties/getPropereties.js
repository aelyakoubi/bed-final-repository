import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getProperties = async () => {
  try {
    const properties = await prisma.property.findMany();
    return properties;
  } catch (error) {
    throw new Error(`Error in getProperties service: ${error.message}`);
  }
};

export default getProperties;
