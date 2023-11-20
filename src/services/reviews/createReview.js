import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createReview = async (reviewData) => {
  try {
    const review = await prisma.review.create({ data: reviewData });
    return review;
  } catch (error) {
    throw new Error(`Error in createReview service: ${error.message}`);
  }
};

export default createReview;
