import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteAmenityById = async (amenityId) => {
  try {
    const amenity = await prisma.amenity.delete({ where: { id: amenityId } });
    return amenity;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteAmenityById;
