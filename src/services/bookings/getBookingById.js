import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBookingById = async (bookingId) => {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        user: true, 
        property: true, 
      },
    });

    return booking;
  } catch (error) {
    throw new Error(`Error in getBookingById service: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
};

export default getBookingById;
