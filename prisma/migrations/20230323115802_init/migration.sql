-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `nikeName` VARCHAR(191) NULL,
    `github_url` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NULL,
    `grupId` VARCHAR(191) NULL,

    UNIQUE INDEX `user_id_key`(`id`),
    UNIQUE INDEX `user_github_url_key`(`github_url`),
    UNIQUE INDEX `user_email_key`(`email`),
    INDEX `user_postId_idx`(`postId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grup` (
    `id` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NULL,
    `Integral` JSON NOT NULL,

    INDEX `grup_postId_idx`(`postId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post` (
    `id` VARCHAR(191) NOT NULL,
    `title` TEXT NOT NULL,
    `description` TEXT NULL,
    `url_img` TEXT NULL,
    `post` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
