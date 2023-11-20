import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateBookingById = async (bookingId, updatedData) => {
  try {
    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: updatedData,
    });
    return updatedBooking;
  } catch (error) {
    throw new Error(`Error in updateBookingById service: ${error.message}`);
  }
};

export default updateBookingById;
