import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPropertyById = async (propertyId) => {
  try {
    const property = await prisma.property.findUnique({ where: { id: propertyId } });
    return property;
  } catch (error) {
    throw new Error(`Error in getPropertyById service: ${error.message}`);
  }
};

export default getPropertyById;
