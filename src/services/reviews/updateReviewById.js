import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateReviewById = async (
  id,
  userId,
  propertyId,
  rating,
  comment,
  updatedData,
  res
) => {
  try {
    const updatedReview = await prisma.review.update({
      where: { id, userId, propertyId, rating, comment },
      data: updatedData,
    });

    // Send JSON response
    res.status(200).json(updatedReview);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error("Error updating review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Disconnect PrismaClient
    await prisma.$disconnect();
  }
};

export default updateReviewById;
