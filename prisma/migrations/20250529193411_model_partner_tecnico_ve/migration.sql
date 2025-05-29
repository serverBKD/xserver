-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "website" TEXT,
    "social" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "city" TEXT NOT NULL DEFAULT 'valencia',
    "country" TEXT DEFAULT 'venezuela',
    "state" TEXT DEFAULT 'carabobo',
    "zip" TEXT DEFAULT '2001',
    "img" TEXT,
    "since" TEXT NOT NULL,
    "notes" TEXT,
    "source" TEXT DEFAULT 'form-partner',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Partner_id_key" ON "Partner"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_email_key" ON "Partner"("email");
