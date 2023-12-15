import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getReviewById = async (reviewId) => {
  try {
    const review = await prisma.review.findUnique({
      where: { id: reviewId },
    });

    return review;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};


export default getReviewById;
