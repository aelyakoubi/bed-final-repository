import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updatePropertyById = async (propertyId, updatedData) => {
  try {
    const updatedProperty = await prisma.property.update({
      where: { id: propertyId },
      data: updatedData,
    });
    return updatedProperty;
  } catch (error) {
    if (
      error instanceof Error &&
      error.code === "P2025"
    ) {
      return null; // Property / specified ID / not found
    } else {
      throw new Error(`Error in updatePropertyById service: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default updatePropertyById;

