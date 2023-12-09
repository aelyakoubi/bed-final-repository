import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBooking = async ({
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
}) => {
  try {
    const booking = await prisma.booking.create({
      data: {
        userId,
        propertyId,
        checkinDate,
        checkoutDate,
        numberOfGuests,
        totalPrice,
        bookingStatus,
      },
    });

    return booking;
  } catch (error) {
    throw new Error(`Error creating booking: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
};

export default createBooking;
