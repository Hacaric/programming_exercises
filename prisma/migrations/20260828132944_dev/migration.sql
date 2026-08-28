/*
  Warnings:

  - You are about to drop the column `activityID` on the `ActivityTags` table. All the data in the column will be lost.
  - You are about to drop the column `maxDuration` on the `ActivityTags` table. All the data in the column will be lost.
  - You are about to drop the column `minDuration` on the `ActivityTags` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[activityId]` on the table `ActivityTags` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `activityId` to the `ActivityTags` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ActivityTags` DROP FOREIGN KEY `ActivityTags_activityID_fkey`;

-- DropIndex
DROP INDEX `ActivityTags_activityID_key` ON `ActivityTags`;

-- AlterTable
ALTER TABLE `Activity` ADD COLUMN `durationMinutes` INTEGER NULL,
    ADD COLUMN `neededItems` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `ActivityTags` DROP COLUMN `activityID`,
    DROP COLUMN `maxDuration`,
    DROP COLUMN `minDuration`,
    ADD COLUMN `activityId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ActivityTags_activityId_key` ON `ActivityTags`(`activityId`);

-- AddForeignKey
ALTER TABLE `ActivityTags` ADD CONSTRAINT `ActivityTags_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
