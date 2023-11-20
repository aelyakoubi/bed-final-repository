import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createProperty = async (propertyData) => {
  try {
    const property = await prisma.property.create({ data: propertyData });
    return property;
  } catch (error) {
    throw new Error(`Error in createProperty service: ${error.message}`);
  }
};

export default createProperty;
