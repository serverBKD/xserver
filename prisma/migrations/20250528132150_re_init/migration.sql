-- CreateTable
CREATE TABLE "Auth" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nickname" TEXT,
    "email" TEXT NOT NULL,
    "hashPass" TEXT NOT NULL,
    "role" BOOLEAN DEFAULT false,
    "img" TEXT,
    "source" TEXT DEFAULT 'form-login',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT NOT NULL,
    "email" TEXT,
    "tel" TEXT,
    "city" TEXT DEFAULT 'valencia',
    "img" TEXT,
    "notes" TEXT,
    "source" TEXT DEFAULT 'form-client',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT,
    "description" TEXT,
    "trademark" TEXT DEFAULT 'trifaxic',
    "code" TEXT NOT NULL,
    "serial" TEXT,
    "barcode" TEXT,
    "sku" TEXT,
    "img" TEXT,
    "price_base" REAL NOT NULL,
    "delta" REAL DEFAULT 0,
    "divisa" TEXT DEFAULT 'usd',
    "stock" INTEGER NOT NULL,
    "unity" TEXT DEFAULT '1',
    "weigth" TEXT,
    "dimension" TEXT,
    "notes" TEXT,
    "tags" TEXT,
    "category" TEXT,
    "warehouseId" INTEGER NOT NULL DEFAULT 0,
    "source" TEXT DEFAULT 'form-product',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Product_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ventas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client" TEXT NOT NULL,
    "quantity" INTEGER DEFAULT 1,
    "products" TEXT NOT NULL,
    "payment" TEXT,
    "total" REAL NOT NULL DEFAULT 0,
    "img" TEXT,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "source" TEXT DEFAULT 'form-Ventas',
    CONSTRAINT "Ventas_client_fkey" FOREIGN KEY ("client") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ventas_products_fkey" FOREIGN KEY ("products") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Warehouse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "warehouse" TEXT NOT NULL DEFAULT 'general'
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "concept" TEXT NOT NULL,
    "notes" TEXT,
    "amount" REAL NOT NULL,
    "img" TEXT,
    "completed" BOOLEAN DEFAULT false,
    "debit" BOOLEAN DEFAULT false,
    "initAt" TEXT,
    "source" TEXT DEFAULT 'form-finance',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Hanyu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hanzi" TEXT NOT NULL,
    "pinyin" TEXT NOT NULL,
    "xinbanya" TEXT NOT NULL,
    "tone" TEXT,
    "img" TEXT,
    "source" TEXT DEFAULT 'form-hanyu',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT DEFAULT 'técnico seguridad',
    "img" TEXT,
    "source" TEXT DEFAULT 'form-blog',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Log" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ip" TEXT,
    "context" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "error" BOOLEAN DEFAULT false,
    "img" TEXT,
    "source" TEXT DEFAULT 'form-log',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ListEmail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullname" TEXT,
    "email" TEXT,
    "tel" TEXT,
    "message" TEXT,
    "source" TEXT DEFAULT 'form-list-email',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

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
CREATE UNIQUE INDEX "Auth_id_key" ON "Auth"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Auth_email_key" ON "Auth"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_id_key" ON "Client"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ventas_id_key" ON "Ventas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Warehouse_id_key" ON "Warehouse"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tasks_id_key" ON "Tasks"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Hanyu_id_key" ON "Hanyu"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_id_key" ON "Blog"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Log_id_key" ON "Log"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Provider_id_key" ON "Provider"("id");
