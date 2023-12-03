import { PrismaClient } from "@prisma/client";

const createBooking = async (
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus,
  res
) => {
  console.log("the number of guests is: " + numberOfGuests);

  const prisma = new PrismaClient();

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

    // Send JSON response
    res.status(201).json(booking);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after the operation
  }
};

export default createBooking;
