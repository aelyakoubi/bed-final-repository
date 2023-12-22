import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createReview = async ({ rating, comment, userId, propertyId }) => {
  try {
    if (!rating) {
      res.status(400).json({
        message: "Rating is required for creating a review.",
      });
      return;
    }

    const review = await prisma.review.create({
      data: {
        rating,
        comment,
        userId,
        propertyId,
      },
    });
    res.status(201).json({
      message: "Review successfully added",
      review,
    });
  } catch (error) {
    console.error(`Review creation error: ${error.message}`);
    res.status(500).json({
      message: "Internal Server Error",
    });
  } finally {
    await prisma.$disconnect();
  }
};

export default createReview;
