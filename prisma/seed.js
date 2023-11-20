import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    const user1 = await prisma.user.create({
      data: {
        name: "John Doe",
        username: "unique_username", // Change to a unique username //
        password: "password123",
      },
    });
    
    const host1 = await prisma.host.create({
      data: {
        name: "Host Name",
      },
    });

    const property1 = await prisma.property.create({
      data: {
        name: "Property Name",
        description: "Property Description",
        pricePerNight: 100,
        Host: { 
          connect: { id: host1.id },
        },
      },
    });
    

    const amenity1 = await prisma.amenity.create({
      data: {
        name: "Wifi",
        properties: {
          connect: { id: property1.id },
        },
      },
    });

    const booking1 = await prisma.booking.create({
      data: {
        checkInDate: new Date(),
        checkOutDate: new Date(),
        property: {
          connect: { id: property1.id },
        },
        user: {
          connect: { id: user1.id },
        },
      },
    });

    const review1 = await prisma.review.create({
      data: {
        content: "Excellent stay!",
        rating: 5,
        property: {
          connect: { id: property1.id },
        },
      },
    });

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
