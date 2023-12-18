import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createProperty = async ({
  title,
  description,
  location,
  pricePerNight,
  bedroomCount,
  bathRoomCount,
  maxGuestCount,
  hostId,
  rating,
}) => {
  try {
    const property = await prisma.property.create({
      data: {
        title,
        description,
        location,
        pricePerNight,
        bedroomCount,
        bathRoomCount,
        maxGuestCount,
        hostId,
        rating,
      },
    });
    return property;
  } catch (error) {
    // Handle unique constraint violation for the title
    if (
      error instanceof Error &&
      error.code === "P2002" &&
      error.meta?.target?.includes("title")
    ) {
      throw new Error(`Property with title '${title}' already exists.`);
    } else {
      throw new Error(`Error in createProperty service: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default createProperty;
