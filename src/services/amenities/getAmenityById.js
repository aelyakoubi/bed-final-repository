import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAmenityById = async (amenityId) => {
  try {
    const amenity = await prisma.amenity.findUnique({
      where: { id: amenityId },
    });
    return amenity;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default getAmenityById;
