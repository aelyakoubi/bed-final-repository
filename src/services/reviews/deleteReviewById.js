import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteReviewById = async (reviewId) => {
  try {
    const review = await prisma.review.delete({
      where: { id: reviewId},
    });
    return review;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteReviewById;
