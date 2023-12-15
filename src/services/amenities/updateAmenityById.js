import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateAmenityById = async (amenityId, updatedAmenityData) => {
  try {
    const amenity = await prisma.amenity.update({
      where: { id: amenityId },
      data: updatedAmenityData,
    });
    return amenity;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default updateAmenityById;
