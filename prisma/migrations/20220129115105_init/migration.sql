CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT,
    "picture" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "phone" TEXT NOT NULL UNIQUE,
    "status" INT NOT NULL DEFAULT 0,
    "validation_date" DATE,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY ("id")
);

CREATE TABLE "merchant" (
    "id" SERIAL NOT NULL,
    "email" TEXT UNIQUE,
    "password" TEXT,
    "phone" TEXT NOT NULL UNIQUE,
    "status" INT NOT NULL DEFAULT 0,
    "profileId" INT NOT NULL DEFAULT 0,
    "optionsId" INT NOT NULL DEFAULT 0,
    "menuId" INT NOT NULL DEFAULT 0,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    "validation_date" DATE,
    PRIMARY KEY ("id")
);

CREATE TABLE "merchant_profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "picture" TEXT,
    "instagram" TEXT,
    "description" TEXT,
    "openingTimes" TEXT,
    "status" INT NOT NULL DEFAULT 0,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY ("id")
);

CREATE TABLE "merchant_options" (
    "id" SERIAL NOT NULL,
    "merchantId" INT NOT NULL,
    "punchCount" INT NOT NULL,
    "punchIcon" TEXT,
    "punchBackGroundImage" TEXT,
    "downContext" TEXT,
    "validItemsDate" TEXT,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY ("id")
);

CREATE TABLE "merchant_application" (
    "id" SERIAL NOT NULL,
    "merchantId" INT NOT NULL,
    "taxOffice" INT NOT NULL,
    "taxId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY ("id")
);

CREATE TABLE "user_log" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "responseType" TEXT NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY ("id")
);

CREATE TABLE "order_header" (
    "id" SERIAL NOT NULL,
    "customerId" INT NOT NULL,
    "merchantId" INT NOT NULL,
    "orderId" TEXT NOT NULL,
    "status" INT NOT NULL DEFAULT 0,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY ("id")
);

CREATE TABLE "order_body" (
    "id" SERIAL NOT NULL,
    "headerId" INT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INT NOT NULL DEFAULT 1,
    "status" INT NOT NULL DEFAULT 0,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY ("id")
);

CREATE TABLE "merchant_menu" (
    "id" SERIAL NOT NULL,
    "merchantId" INT NOT NULL,
    "title" TEXT NOT NULL,
    "desctiption" TEXT,
    "picture" TEXT,
    "status" INT NOT NULL DEFAULT 0,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY ("id")
);