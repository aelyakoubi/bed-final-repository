import { PrismaClient } from "@prisma/client";

const getBookings = async (
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus,
  res
) => {
  const prisma = new PrismaClient();

  try {
    const bookings = await prisma.booking.findMany({
      where: {
        userId,
        propertyId,
        checkinDate,
        checkoutDate,
        numberOfGuests,
        totalPrice,
        bookingStatus,
      },
    });

    // Send JSON response
    res.status(200).json(bookings);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after the operation
  }
};

export default getBookings;
