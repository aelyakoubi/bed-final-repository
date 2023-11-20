import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBookings = async () => {
  try {
    const bookings = await prisma.booking.findMany();
    return bookings;
  } catch (error) {
    throw new Error(`Error in getBookings service: ${error.message}`);
  }
};

export default getBookings;
