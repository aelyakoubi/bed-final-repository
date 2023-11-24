import { PrismaClient } from "@prisma/client";
import userData from "../src/data/users.json" assert { type: "json" };
import amenityData from "../src/data/amenities.json" assert { type: "json" };
import reviewData from "../src/data/reviews.json" assert { type: "json" };
import propertyData from "../src/data/properties.json" assert { type: "json" };
import bookingData from "../src/data/bookings.json" assert { type: "json" };
import hostData from "../src/data/hosts.json" assert { type: "json" };

const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });

async function seed() {
  try {
    for (const amenity of amenityData.amenities) {
      await prisma.amenity.upsert({
        where: { id: amenity.id },
        update: {},
        create: amenity,
      });
    }
    for (const booking of bookingData.bookings) {
      await prisma.booking.upsert({
        where: { id: booking.id },
        update: {},
        create: booking,
      });
    }
    for (const host of hostData.hosts) {
      await prisma.host.upsert({
        where: { id: host.id },
        update: {},
        create: host,
      });
    }
    for (const property of propertyData.properties) {
      await prisma.property.upsert({
        where: { id: property.id },
        update: {},
        create: property,
      });
    }
    for (const review of reviewData.reviews) {
      await prisma.review.upsert({
        where: { id: review.id },
        update: {},
        create: review,
      });
    }
    for (const user of userData.users) {
      await prisma.user.upsert({
        where: { id: user.id },
        update: {},
        create: user,
      });
    }
    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed().catch((e) => {
  throw e;
});
