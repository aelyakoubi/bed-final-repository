import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteReviewById = async (reviewId) => {
  try {
    const deletedReview = await prisma.review.delete({ where: { id: reviewId } });
    return deletedReview;
  } catch (error) {
    throw new Error(`Error in deleteReviewById service: ${error.message}`);
  }
};

export default deleteReviewById;
