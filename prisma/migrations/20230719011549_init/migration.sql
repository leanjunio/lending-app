/*
  Warnings:

  - The `availability` column on the `Instrument` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Instrument" DROP COLUMN "availability",
ADD COLUMN     "availability" BOOLEAN NOT NULL DEFAULT true;
