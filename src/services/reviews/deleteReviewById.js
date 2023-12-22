import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteReviewById = async (reviewId) => {
  try {
    const review = await prisma.review.delete({
      where: { id: reviewId },
    });
    return review;
  } catch (error) {
    if (error instanceof Error && error.code === "P2025") {
      return null; // Review with the specified ID was not found
    } else {
      throw new Error(`Error in deleting review: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteReviewById;
