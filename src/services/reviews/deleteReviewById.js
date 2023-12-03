import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteReviewById = async (
  id,
  userId,
  propertyId,
  rating,
  comment,
  res
) => {
  try {
    const deletedReview = await prisma.review.delete({
      where: { id, userId, propertyId, rating, comment },
    });

    // Send JSON response
    res.status(200).json(deletedReview);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error("Error deleting review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Disconnect PrismaClient
    await prisma.$disconnect();
  }
};

export default deleteReviewById;
