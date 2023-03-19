/*
  Warnings:

  - You are about to drop the column `grup` on the `Posts` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_team" TEXT NOT NULL,
    "postId" TEXT,
    CONSTRAINT "team_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "url_img" TEXT,
    "post" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Posts" ("createdAt", "description", "id", "post", "title", "updatedAt", "url_img") SELECT "createdAt", "description", "id", "post", "title", "updatedAt", "url_img" FROM "Posts";
DROP TABLE "Posts";
ALTER TABLE "new_Posts" RENAME TO "Posts";
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "nikeName" TEXT,
    "description" TEXT,
    "email" TEXT NOT NULL,
    "postId" TEXT,
    "teamId" TEXT,
    CONSTRAINT "Users_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Users_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Users" ("email", "id", "name", "nikeName", "postId") SELECT "email", "id", "name", "nikeName", "postId" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
