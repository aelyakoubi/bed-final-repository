import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createAmenity = async (amenityData) => {
  try {
    const amenity = await prisma.amenity.create({ data: amenityData });
    return amenity;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default createAmenity;
