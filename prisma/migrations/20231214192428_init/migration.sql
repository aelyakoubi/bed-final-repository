/*
  Warnings:

  - You are about to drop the column `bookingsStatus` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `ProfilePicture` on the `Host` table. All the data in the column will be lost.
  - You are about to drop the column `bathroomCount` on the `Property` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ProfilePicture` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `_id` on the `User` table. All the data in the column will be lost.
  - Added the required column `bookingStatus` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profilePicture` to the `Host` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bathRoomCount` to the `Property` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `profilePicture` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `phoneNumber` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `bookingsStatus`,
    ADD COLUMN `bookingStatus` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Host` DROP COLUMN `ProfilePicture`,
    ADD COLUMN `profilePicture` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Property` DROP COLUMN `bathroomCount`,
    ADD COLUMN `bathRoomCount` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `ProfilePicture`,
    DROP COLUMN `_id`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `profilePicture` VARCHAR(191) NOT NULL,
    MODIFY `phoneNumber` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
