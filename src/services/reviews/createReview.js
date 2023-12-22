import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createReview = async ({ rating, comment, userId, propertyId }) => {
  try {
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
    if (
      error instanceof Error &&
      error.code === "ERROR_CODE_creating new Review" // 
    ) {
      console.error(`Custom error creating review: ${error.message}`);
      throw new Error(`Custom error creating review: ${error.message}`);
    } else if (
      error instanceof Error &&
      error.code === "P2002" &&
      error.meta?.target?.includes("unique constraint")
    ) {
      console.error(`Review with the same combination already exists.`);
      throw new Error(`Review with the same combination already exists.`);
    } else {
      console.error(`Error creating review: ${error.message}`);
      throw new Error(`Error creating review: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default createReview;
