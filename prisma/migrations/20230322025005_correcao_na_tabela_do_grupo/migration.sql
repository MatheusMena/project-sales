/*
  Warnings:

  - You are about to drop the column `grup` on the `post` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_grup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "postId" TEXT,
    CONSTRAINT "grup_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_grup" ("id") SELECT "id" FROM "grup";
DROP TABLE "grup";
ALTER TABLE "new_grup" RENAME TO "grup";
CREATE TABLE "new_post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "url_img" TEXT,
    "post" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_post" ("createdAt", "description", "id", "post", "title", "updatedAt", "url_img") SELECT "createdAt", "description", "id", "post", "title", "updatedAt", "url_img" FROM "post";
DROP TABLE "post";
ALTER TABLE "new_post" RENAME TO "post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
