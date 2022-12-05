-- CreateTable
CREATE TABLE "Follows" (
    "followerUsername" TEXT NOT NULL,
    "followingUsername" TEXT NOT NULL,

    PRIMARY KEY ("followerUsername", "followingUsername"),
    CONSTRAINT "Follows_followerUsername_fkey" FOREIGN KEY ("followerUsername") REFERENCES "users" ("username") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Follows_followingUsername_fkey" FOREIGN KEY ("followingUsername") REFERENCES "users" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);
