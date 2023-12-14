import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAmenities = async () => {
  try {
    const amenities = await prisma.amenity.findMany();
    return amenities;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default getAmenities;
