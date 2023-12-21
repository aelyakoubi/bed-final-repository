import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createReview = async ({ rating, comment, userId, propertyId }) => {
  try {
    const review = await prisma.review.create({
      data: {
        rating,
        comment,
        userId,
        propertyId
      },
    });
    return review;
  } catch (error) {
    console.error(`Error creating review: ${error.message}`);
    throw new Error(`Error creating review: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
};

export default createReview;
