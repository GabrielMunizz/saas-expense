/*
  Warnings:

  - You are about to alter the column `installments` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "installments" SET DEFAULT 1,
ALTER COLUMN "installments" SET DATA TYPE INTEGER;
