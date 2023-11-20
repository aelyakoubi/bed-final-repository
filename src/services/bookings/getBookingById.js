import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBookingById = async (bookingId) => {
  try {
    const booking = await prisma.booking.findUnique({ where: { id: bookingId } });
    return booking;
  } catch (error) {
    throw new Error(`Error in getBookingById service: ${error.message}`);
  }
};

export default getBookingById;

