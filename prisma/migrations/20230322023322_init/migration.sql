-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "nikeName" TEXT,
    "github_url" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "postId" TEXT,
    "grupId" TEXT,
    CONSTRAINT "user_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "user_grupId_fkey" FOREIGN KEY ("grupId") REFERENCES "grup" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "grup" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "url_img" TEXT NOT NULL,
    "post" BOOLEAN NOT NULL DEFAULT false,
    "grup" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_github_url_key" ON "user"("github_url");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "user_postId_idx" ON "user"("postId");

-- CreateIndex
CREATE INDEX "user_grupId_idx" ON "user"("grupId");
