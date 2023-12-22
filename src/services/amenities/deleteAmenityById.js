import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteAmenityById = async (amenityId) => {
  try {
    const amenity = await prisma.amenity.delete({ where: { id: amenityId } });
    return amenity;
  } catch (error) {
    if (error instanceof Error && error.code === "P2025") {
      return null; // Amenity / specified ID / not found
    } else {
      throw new Error(`Error in deleting amenity: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteAmenityById;
