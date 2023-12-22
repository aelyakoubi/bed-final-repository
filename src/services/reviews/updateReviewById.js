import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateReviewById = async (reviewId, updatedReviewData) => {
  try {
    const review = await prisma.review.update({
      where: { id: reviewId },
      data: updatedReviewData,
    });
    return review;
  } catch (error) {
    if (error instanceof Error && error.code === "P2025") {
      return null; // Review with the specified ID was not found
    } else {
      throw new Error(`Error in updating review: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default updateReviewById;
