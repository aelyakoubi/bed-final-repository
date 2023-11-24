-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `pictureUrl` VARCHAR(191) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Booking` (
    `id` VARCHAR(191) NOT NULL,
    `userID` VARCHAR(191) NULL,
    `propertyID` VARCHAR(191) NULL,
    `checkinDate` DATETIME(3) NULL,
    `checkoutDate` DATETIME(3) NULL,
    `numberOfGuests` INTEGER NULL,
    `totalPrice` INTEGER NULL,
    `bookingsStatus` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` VARCHAR(191) NOT NULL,
    `userID` VARCHAR(191) NULL,
    `propertyID` VARCHAR(191) NULL,
    `rating` INTEGER NULL,
    `comment` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Property` (
    `id` VARCHAR(191) NOT NULL,
    `hostId` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `pricePerNight` DECIMAL(65, 30) NULL,
    `bedroomCount` INTEGER NULL,
    `bathroomCount` INTEGER NULL,
    `maxGuestCount` INTEGER NULL,
    `rating` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Amenity` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Host` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `pictureUrl` VARCHAR(191) NULL,
    `aboutMe` VARCHAR(191) NULL,
    `propertyId` VARCHAR(191) NULL,

    UNIQUE INDEX `Host_username_key`(`username`),
    INDEX `Host_propertyId_idx`(`propertyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
