import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createReview = async ({ rating, comment, userId, propertyId }) => {
  try {
    if (!rating) {
      throw new Error("Rating is required for creating a review.");
    }

    const review = await prisma.review.create({
      data: {
        rating,
        comment,
        userId,
        propertyId,
      },
    });
    return review;
  } catch (error) {
    console.error(`Review creation error: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
};

export default createReview;
