import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateReviewById = async (
  reviewId, updatedReviewData) => {
  try {
    const review = await prisma.review.update({
      where: { id: reviewId},
      data: updatedReviewData,
    });
    return review;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default updateReviewById;
