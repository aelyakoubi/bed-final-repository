import { PrismaClient } from "@prisma/client";

const getBookings = async (
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus,
) => {
  let prisma;
  try {
    prisma = new PrismaClient();

    const prismaFilters = {
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus,
    };

    const bookings = await prisma.booking.findMany({
      where: prismaFilters,
    });

    return bookings;
  } catch (error) {
    throw new Error(`Error fetching bookings: ${error.message}`);
  } finally {
    if (prisma) {
      await prisma.$disconnect();
    }
  }
};

export default getBookings;
