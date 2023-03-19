-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "url_img" TEXT,
    "post" BOOLEAN NOT NULL DEFAULT false,
    "grup" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Posts" ("createdAt", "description", "grup", "id", "post", "title", "updatedAt", "url_img") SELECT "createdAt", "description", "grup", "id", "post", "title", "updatedAt", "url_img" FROM "Posts";
DROP TABLE "Posts";
ALTER TABLE "new_Posts" RENAME TO "Posts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
