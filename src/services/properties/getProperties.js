import { PrismaClient } from "@prisma/client";

const getProperties = async (location, pricePerNight) => {
  let prisma;

  try {
    prisma = new PrismaClient();

    const prismaFilters = {
      location,
      pricePerNight,
    };

    console.log("Executing query with filters:", prismaFilters);

    const properties = await prisma.property.findMany({
      where: prismaFilters,
    });

    console.log("Received filter criteria:", prismaFilters);
    console.log("Query result:", properties);

    return properties;
  } catch (error) {
    console.error("Error in getProperties service:", error.message);
    throw new Error(`Error in getProperties service: ${error.message}`);
  } finally {
    await prisma?.$disconnect();
  }
};

export default getProperties;
