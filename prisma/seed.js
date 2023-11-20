import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    // Sample data for amenities
    const amenitiesData = {
      amenities: [
        {
          id: "l4567890-12gh-ijkl-1234-56789abcdef0",
          name: "Wifi",
        },
        // ... Add other amenities data
      ],
    };

    // Sample data for bookings
    const bookingsData = {
      bookings: [
        {
          id: "f0123456-78ab-cdef-0123-456789abcdef",
          userId: "a1234567-89ab-cdef-0123-456789abcdef",
          propertyId: "g9012345-67ef-0123-4567-89abcdef0123",
          checkinDate: "2023-03-10T18:00:00.000Z",
          checkoutDate: "2023-03-15T10:00:00.000Z",
          numberOfGuests: 2,
          totalPrice: 150.25,
          bookingStatus: "confirmed",
        },
        // ... Add other bookings data
      ],
    };

    // Sample data for hosts
    const hostsData = {
      hosts: [
        {
          id: "f1234567-89ab-cdef-0123-456789abcdef",
          username: "johnDoe",
          password: "johnDoe123",
          name: "John Doe",
          email: "johndoe@email.com",
          phoneNumber: "+11234567890",
          profilePicture: "https://example.com/images/johndoe.jpg",
          aboutMe: "I'm a passionate traveler who loves to share my home with fellow explorers. Welcome!",
        },
        // ... Add other hosts data
      ],
    };

    // Sample data for properties
    const propertiesData = {
      properties: [
        {
          id: "g9012345-67ef-0123-4567-89abcdef0123",
          title: "Cozy Mountain Retreat",
          description: "Experience tranquility in our cozy cabin situated on a serene mountain peak.",
          location: "Rocky Mountains, Colorado",
          pricePerNight: 120.5,
          bedroomCount: 3,
          bathRoomCount: 2,
          maxGuestCount: 5,
          hostId: "f1234567-89ab-cdef-0123-456789abcdef",
          rating: 5,
        },
        // ... Add other properties data
      ],
    };

    // Sample data for reviews
    const reviewsData = {
      reviews: [
        {
          id: "g7890123-45cd-ef01-2345-6789abcdef01",
          userId: "a1234567-89ab-cdef-0123-456789abcdef",
          propertyId: "g9012345-67ef-0123-4567-89abcdef0123",
          rating: 5,
          comment: "The property was amazing, and the host was very accommodating!",
        },
        // ... Add other reviews data
      ],
    };

    // Sample data for users
    const usersData = {
      users: [
        {
          id: "a1234567-89ab-cdef-0123-456789abcdef",
          username: "jdoe",
          password: "password123",
          name: "John Doe",
          email: "johndoe@example.com",
          phoneNumber: "123-456-7890",
          profilePicture: "https://global-uploads.webflow.com/5eecfecbe625d195e35b89f2/624bfb093da7d92733c001c0_Ignacio%20Villafruela%20Rodr%C3%ADguez.jpg",
        },
        // ... Add other users data
      ],
    };

    // Create amenities
    for (const amenityData of amenitiesData.amenities) {
      await prisma.amenity.create({
        data: amenityData,
      });
    }

    // Create bookings
    for (const bookingData of bookingsData.bookings) {
      await prisma.booking.create({
        data: bookingData,
      });
    }

    // Create hosts
    for (const hostData of hostsData.hosts) {
      await prisma.host.create({
        data: hostData,
      });
    }

    // Create properties
    for (const propertyData of propertiesData.properties) {
      await prisma.property.create({
        data: propertyData,
      });
    }

    // Create reviews
    for (const reviewData of reviewsData.reviews) {
      await prisma.review.create({
        data: reviewData,
      });
    }

    // Create users
    for (const userData of usersData.users) {
      await prisma.user.create({
        data: userData,
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
