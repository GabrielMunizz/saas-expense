import { Transaction } from "@prisma/client";
import * as XLSX from "xlsx";

const exportCSV = (
  title?: string,
  worksheetName?: string,
  transactions?: Transaction[],
) => {
  try {
    if (transactions && Array.isArray(transactions)) {
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(transactions);
      XLSX.utils.book_append_sheet(workbook, worksheet, worksheetName);
      XLSX.writeFile(workbook, `${title}.xlsx`);
    } else {
      throw new Error("Erro ao exportar CSV");
    }
  } catch (error) {
    console.error(error);
  }
};

export default exportCSV;
