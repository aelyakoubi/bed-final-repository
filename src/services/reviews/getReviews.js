import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getReviews = async () => {
  try {
    const reviews = await prisma.review.findMany();
    return reviews;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default getReviews;
