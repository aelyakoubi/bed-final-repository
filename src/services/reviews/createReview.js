import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createReview = async ({ rating, comment, userId, propertyId }) => {
  try {
    const reviewData = {
      comment,
      userId,
      propertyId,
    };

    if (rating !== undefined) {
      reviewData.rating = rating;
    }

    const review = await prisma.review.create({
      data: reviewData,
    });

    console.log("Review successfully added");
    return {
      message: "Review successfully added",
      review,
    };
  } catch (error) {
    console.error(`Review creation error: ${error.message}`);
    return {
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export default createReview;
