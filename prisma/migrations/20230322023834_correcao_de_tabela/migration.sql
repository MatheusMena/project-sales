-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "url_img" TEXT,
    "post" BOOLEAN NOT NULL DEFAULT false,
    "grup" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_post" ("createdAt", "description", "grup", "id", "post", "title", "updatedAt", "url_img") SELECT "createdAt", "description", "grup", "id", "post", "title", "updatedAt", "url_img" FROM "post";
DROP TABLE "post";
ALTER TABLE "new_post" RENAME TO "post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
