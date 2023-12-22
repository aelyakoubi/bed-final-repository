import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateHostById = async (hostId, updatedData) => {
  try {
    const updatedHost = await prisma.host.update({
      where: { id: hostId },
      data: updatedData,
    });
    return updatedHost;
  } catch (error) {
    if (
      error instanceof Error &&
      error.code === "P2025"
    ) {
      return null; // Host // specified ID // not found
    } else {
      throw new Error(`Error in updateHostById service: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default updateHostById;
