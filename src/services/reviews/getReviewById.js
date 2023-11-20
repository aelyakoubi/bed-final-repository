import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getReviewById = async (reviewId) => {
  try {
    const review = await prisma.review.findUnique({ where: { id: reviewId } });
    return review;
  } catch (error) {
    throw new Error(`Error in getReviewById service: ${error.message}`);
  }
};

export default getReviewById;
