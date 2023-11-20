import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateReviewById = async (reviewId, updatedData) => {
  try {
    const updatedReview = await prisma.review.update({
      where: { id: reviewId },
      data: updatedData,
    });
    return updatedReview;
  } catch (error) {
    throw new Error(`Error in updateReviewById service: ${error.message}`);
  }
};

export default updateReviewById;
