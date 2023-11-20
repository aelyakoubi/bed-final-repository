import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBooking = async (bookingData) => {
  try {
    const booking = await prisma.booking.create({ data: bookingData });
    return booking;
  } catch (error) {
    throw new Error(`Error in createBooking service: ${error.message}`);
  }
};

export default createBooking;
