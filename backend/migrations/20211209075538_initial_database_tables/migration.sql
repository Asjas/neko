-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Catalogue" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "image_filesize" INTEGER,
    "image_extension" TEXT,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_mode" TEXT,
    "image_id" TEXT,

    CONSTRAINT "Catalogue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CatalogueItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "responsiveImageLink" TEXT NOT NULL DEFAULT E'',
    "martiniImageLink" TEXT NOT NULL DEFAULT E'',
    "catalogue" TEXT,

    CONSTRAINT "CatalogueItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" TEXT NOT NULL,
    "field1_heading" TEXT NOT NULL DEFAULT E'',
    "field1_content" TEXT NOT NULL DEFAULT E'',
    "field2_heading" TEXT NOT NULL DEFAULT E'',
    "field2_content" TEXT NOT NULL DEFAULT E'',
    "field3_heading" TEXT NOT NULL DEFAULT E'',
    "field3_content" TEXT NOT NULL DEFAULT E'',
    "field4_heading" TEXT NOT NULL DEFAULT E'',
    "field4_content" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "content" JSONB NOT NULL DEFAULT E'[{"type":"paragraph","children":[{"text":""}]}]',

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialMediaIcon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "url" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "SocialMediaIcon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "CatalogueItem_catalogue_idx" ON "CatalogueItem"("catalogue");

-- AddForeignKey
ALTER TABLE "CatalogueItem" ADD CONSTRAINT "CatalogueItem_catalogue_fkey" FOREIGN KEY ("catalogue") REFERENCES "Catalogue"("id") ON DELETE SET NULL ON UPDATE CASCADE;
