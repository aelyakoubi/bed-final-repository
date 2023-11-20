import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getReviews = async () => {
  try {
    const reviews = await prisma.review.findMany();
    return reviews;
  } catch (error) {
    throw new Error(`Error in getReviews service: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
};

export default getReviews;
