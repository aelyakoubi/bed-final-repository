import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteBookingById = async (bookingId) => {
  try {
    const deletedBooking = await prisma.booking.delete({ where: { id: bookingId } });
    return deletedBooking;
  } catch (error) {
    if (error instanceof Error && error.code === "P2025") {
      return null; // Booking with the specified ID was not found
    } else {
      throw new Error(`Error in deleting booking: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteBookingById;
