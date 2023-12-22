import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deletePropertyById = async (propertyId) => {
  try {
    const deletedProperty = await prisma.property.delete({ where: { id: propertyId } });
    return deletedProperty;
  } catch (error) {
    if (
      error instanceof Error &&
      error.code === "P2025"
    ) {
      return null; // Property / specified ID / not found
    } else {
      throw new Error(`Error in deletePropertyById service: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default deletePropertyById;
