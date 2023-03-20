-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nikeName" TEXT,
    "email" TEXT NOT NULL,
    "postId" TEXT,
    "teamId" TEXT,
    CONSTRAINT "Users_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Users_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_team" TEXT NOT NULL,
    "postId" TEXT,
    CONSTRAINT "team_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "url_img" TEXT,
    "post" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE INDEX "Users_postId_idx" ON "Users"("postId");
