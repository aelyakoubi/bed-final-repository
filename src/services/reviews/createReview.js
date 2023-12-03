import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createReview = async ({ id, userId, propertyId, rating, comment, /* other properties */, res }) => {
  try {
    const review = await prisma.review.create({
      data: {
        id,
        userId,
        propertyId,
        rating,
        comment,
        /* other properties */
      }
    });

    // If you want to return the created review as JSON
    res.status(201).json(review);
  } catch (error) {
    throw new Error(`Error in createReview service: ${error.message}`);
  }
};

export default createReview;
