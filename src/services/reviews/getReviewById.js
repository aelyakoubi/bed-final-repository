import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getReviewById = async (id, userId, propertyId, rating, comment, res) => {
  try {
    const review = await prisma.review.findUnique({
      where: { id, userId, propertyId, rating, comment },
    });

    // Send JSON response
    res.status(200).json(review);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error("Error fetching review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Disconnect PrismaClient
    await prisma.$disconnect();
  }
};

export default getReviewById;
