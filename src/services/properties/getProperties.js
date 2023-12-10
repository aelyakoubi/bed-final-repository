// services/properties/getProperties.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getProperties = async (location, pricePerNight) => {
  try {
    const properties = await prisma.property.findMany({
      where: {
        location: {
          contains: location || undefined,
        },
        pricePerNight: {
          lte: pricePerNight || undefined,
        },
      },
    });

    return properties;
  } catch (error) {
    throw new Error(`Error in getProperties service: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
};

export default getProperties;
