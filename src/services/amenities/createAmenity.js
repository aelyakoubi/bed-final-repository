import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createAmenity = async (name) => {
  try {
    const amenity = await prisma.amenity.create({ data: { name } });
    return amenity;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default createAmenity;
