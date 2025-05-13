-- CreateTable
CREATE TABLE "Provider" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT NOT NULL,
    "address" TEXT,
    "city" TEXT DEFAULT 'Valencia',
    "email" TEXT,
    "tel" TEXT NOT NULL,
    "sector" TEXT,
    "img" TEXT,
    "credit" TEXT DEFAULT 'cash',
    "historial" TEXT,
    "notes" TEXT,
    "source" TEXT DEFAULT 'form-provider',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Provider_id_key" ON "Provider"("id");
