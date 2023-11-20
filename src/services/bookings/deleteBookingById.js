import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteBookingById = async (bookingId) => {
  try {
    const deletedBooking = await prisma.booking.delete({ where: { id: bookingId } });
    return deletedBooking;
  } catch (error) {
    throw new Error(`Error in deleteBookingById service: ${error.message}`);
  }
};

export default deleteBookingById;
