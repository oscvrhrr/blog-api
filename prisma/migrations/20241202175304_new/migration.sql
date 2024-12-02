/*
  Warnings:

  - You are about to drop the column `content` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `author` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comment` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "content",
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "comment" TEXT NOT NULL;
