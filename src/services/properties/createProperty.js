import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createProperty = async (title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestCount, hostId, rating ) => {
  try {
    const property = await prisma.property.create({ data:{ title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestCount, hostId, rating } });
    return property;
  } catch (error) {
    throw new Error(`Error in createProperty service: ${error.message}`);
  }
};

export default createProperty;
