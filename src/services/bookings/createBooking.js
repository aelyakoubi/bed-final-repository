// import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBooking = async (
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
) => {
  console.log("the number of guests is: " + numberOfGuests);

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
        // Connect related models using the correct syntax
        user: { connect: { id: userId } },
        property: { connect: { id: propertyId } },
      },
    });

    return booking;
  } catch (error) {
    throw new Error(`Error creating booking: ${error.message}`);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after the operation
  }
};

export default createBooking;
