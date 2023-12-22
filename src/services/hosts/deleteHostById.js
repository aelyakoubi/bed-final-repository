import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteHostById = async (hostId) => {
  try {
    const deletedHost = await prisma.host.delete({ where: { id: hostId } });
    return deletedHost;
  } catch (error) {
    if (
      error instanceof Error &&
      error.code === "P2025"
    ) {
      return null; // Host / specified ID /not found
    } else {
      throw new Error(`Error in deleteHostById service: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteHostById;
