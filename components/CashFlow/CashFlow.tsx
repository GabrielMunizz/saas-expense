"use client";

import formatTotal from "@/utils/formatTotal";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const CashFlow = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [total, _setTotal] = useState(0);
  return (
    <div className="w-full rounded-md border-2">
      <Table className="text-sm">
        <TableHeader>
          <TableRow>
            <TableHead>Tipo</TableHead>
            <TableHead className="w-[200px]"></TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Entradas</TableCell>
            <TableCell />
            <TableCell className="text-right">R$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Investimentos</TableCell>
            <TableCell />
            <TableCell className="text-right">R$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Emprestimos</TableCell>
            <TableCell />
            <TableCell className="text-right">R$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Despesas</TableCell>
            <TableCell />
            <TableCell className="text-right">R$250.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Balanço</TableCell>
            <TableCell className="text-right"></TableCell>
            <TableCell className={`text-right ${formatTotal(total)}`}>
              R$ {total.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default CashFlow;
