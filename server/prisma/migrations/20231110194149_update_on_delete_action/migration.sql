-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_pinId_fkey`;

-- DropForeignKey
ALTER TABLE `Pin` DROP FOREIGN KEY `Pin_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Saved` DROP FOREIGN KEY `Saved_pinId_fkey`;

-- DropForeignKey
ALTER TABLE `Saved` DROP FOREIGN KEY `Saved_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Pin` ADD CONSTRAINT `Pin_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_pinId_fkey` FOREIGN KEY (`pinId`) REFERENCES `Pin`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Saved` ADD CONSTRAINT `Saved_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Saved` ADD CONSTRAINT `Saved_pinId_fkey` FOREIGN KEY (`pinId`) REFERENCES `Pin`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
