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
    throw new Error(`Error in updatePropertyById service: ${error.message}`);
  }
};

export default updatePropertyById;
