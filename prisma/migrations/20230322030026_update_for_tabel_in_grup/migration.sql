-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "nikeName" TEXT,
    "github_url" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "postId" TEXT,
    "grupId" TEXT,
    CONSTRAINT "user_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_user" ("email", "github_url", "grupId", "id", "name", "nikeName", "postId") SELECT "email", "github_url", "grupId", "id", "name", "nikeName", "postId" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");
CREATE UNIQUE INDEX "user_github_url_key" ON "user"("github_url");
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE INDEX "user_postId_idx" ON "user"("postId");
CREATE INDEX "user_grupId_idx" ON "user"("grupId");
CREATE TABLE "new_grup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "postId" TEXT,
    "userId" TEXT,
    CONSTRAINT "grup_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "grup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_grup" ("id", "postId") SELECT "id", "postId" FROM "grup";
DROP TABLE "grup";
ALTER TABLE "new_grup" RENAME TO "grup";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
