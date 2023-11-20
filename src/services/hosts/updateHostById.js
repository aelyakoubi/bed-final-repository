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
    throw new Error(`Error in updateHostById service: ${error.message}`);
  }
};

export default updateHostById;
