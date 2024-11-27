-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "installments" SET DEFAULT 1,
ALTER COLUMN "installments" SET DATA TYPE DECIMAL(65,30);
