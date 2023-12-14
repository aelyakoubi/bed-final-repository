import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deletePropertyById = async (propertyId) => {
  try {
    const deletedProperty = await prisma.property.delete({ where: { id: propertyId } });
    return deletedProperty;
  } catch (error) {
    throw new Error(`Error in deletePropertyById service: ${error.message}`);
  }
};

export default deletePropertyById;
