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
    if (error instanceof Error && error.code === "P2025") {
      return null; // Booking with the specified ID was not found
    } else {
      throw new Error(`Error in updating booking: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default updateBookingById;
