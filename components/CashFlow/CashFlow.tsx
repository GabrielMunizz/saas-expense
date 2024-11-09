"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import formatTotal from "@/utils/formatTotal";

const CashFlow = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [total, _setTotal] = useState(0);
  return (
    <div className="w-full rounded-md border-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg">Tipo</TableHead>
            <TableHead className="w-[200px] text-lg"></TableHead>
            <TableHead className="text-right text-lg">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-lg">Entradas</TableCell>
            <TableCell />
            <TableCell className="text-right text-lg">R$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg">Investimentos</TableCell>
            <TableCell />
            <TableCell className="text-right text-lg">R$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg">Emprestimos</TableCell>
            <TableCell />
            <TableCell className="text-right text-lg">R$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-lg">Despesas</TableCell>
            <TableCell />
            <TableCell className="text-right text-lg">R$250.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="text-lg">Balanço</TableCell>
            <TableCell className="text-right text-lg"></TableCell>
            <TableCell className={`text-right text-lg ${formatTotal(total)}`}>
              R$ {total.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default CashFlow;
