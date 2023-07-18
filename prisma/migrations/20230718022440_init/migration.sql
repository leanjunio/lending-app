-- CreateTable
CREATE TABLE "Instrument" (
    "id" SERIAL NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "name" VARCHAR(100),
    "description" TEXT,
    "instrument_type" VARCHAR(50),
    "rate" DECIMAL(9,2),
    "availability" VARCHAR(50) DEFAULT 'Available',
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requests" (
    "id" SERIAL NOT NULL,
    "borrower_id" INTEGER NOT NULL,
    "instrument_id" INTEGER NOT NULL,
    "status" VARCHAR(50) DEFAULT 'Pending',
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255),
    "password" VARCHAR(255),
    "user_type" VARCHAR(50),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Instrument" ADD CONSTRAINT "Instrument_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_borrower_id_fkey" FOREIGN KEY ("borrower_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_instrument_id_fkey" FOREIGN KEY ("instrument_id") REFERENCES "Instrument"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
