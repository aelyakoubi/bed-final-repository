// services/bookings/updateBookingById.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateBookingById = async (id, updatedBookingData) => {
  try {
    const updatedBooking = await prisma.booking.update({
      where: { id },
      data: updatedBookingData,
    });

    return updatedBooking;
  } catch (error) {
    throw new Error(`Error in updateBookingById service: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
};

export default updateBookingById;
