import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteHostById = async (hostId) => {
  try {
    const deletedHost = await prisma.host.delete({ where: { id: hostId } });
    return deletedHost;
  } catch (error) {
    throw new Error(`Error in deleteHostById service: ${error.message}`);
  }
};

export default deleteHostById;
