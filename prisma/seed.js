import { PrismaClient } from "@prisma/client";
import amenitiesData from "../src/data/amenities.json" assert {type: "json"}
import bookingsData from "../src/data/bookings.json" assert {type: "json"}
import hostsData from "../src/data/hosts.json" assert {type: "json"}
import propertiesData from "../src/data/properties.json" assert {type: "json"}
import reviewsData from "../src/data/reviews.json" assert {type: "json"}
import usersData from "../src/data/users.json" assert {type: "json"}

const prisma = new PrismaClient({log: ["query", "info", "warn", "error"] });

async function main() {
  try {
    // Extract data from JSON files
    const { amenities } = amenitiesData;
    const { bookings } = bookingsData;
    const { hosts } = hostsData;
    const { properties } = propertiesData;
    const { reviews } = reviewsData;
    const { users } = usersData;

    // Seed users
    for (const user of users) {
      await prisma.user.upsert({
        where: { id: user.id },
        update: {},
        create: user,
      });
    }

// Seed bookings
for (const booking of bookings) {
  await prisma.booking.upsert({
    where: { id: booking.id },
    update: {},
    create: {
      ...booking,
      userId: {
        connect: { id: booking.user },
      },
      propertyId: {
        connect: { id: booking.property },
      },
      bookingStatus: "confirmed", // Use the correct field name
    },
  });
}



    // Seed properties
    for (const property of properties) {
      await prisma.property.upsert({
        where: { id: property.id },
        update: {},
        create: {
          ...property,
          amenities: {
            connect: property.amenities.map((id) => ({ id })),
          },
          reviews: {
            connect: property.reviews.map((id) => ({ id })),
          },
          bookings: {
            connect: property.bookings.map((id) => ({ id })),
          },
        },
      });
    }

    // Seed amenities
    for (const amenity of amenities) {
      await prisma.amenity.upsert({
        where: { id: amenity.id },
        update: {},
        create: amenity,
      });
    }

    // Seed reviews
    for (const review of reviews) {
      await prisma.review.upsert({
        where: { id: review.id },
        update: {},
        create: {
          ...review,
          userId: {
            connect: { id: review.user },
          },
          propertyId: {
            connect: { id: review.property },
          },
        },
      });
    }

    // Seed hosts
    for (const host of hosts) {
      await prisma.host.upsert({
        where: { id: host.id },
        update: {},
        create: host,
      });
    }

    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Call the main function to start the seeding process
main()
  .then(() => {
    console.log("Seeding completed successfully.");
  })
  .catch((error) => {
    console.error("Seeding failed:", error);
  });
