import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getReviews = async (res) => {
  try {
    const reviews = await prisma.review.findMany();

    // Send JSON response
    res.status(200).json(reviews);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Disconnect PrismaClient
    await prisma.$disconnect();
  }
};

export default getReviews;
