import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

interface Transaction {
  date: string;
  id: string;
  type: "Crédito" | "Débito";
  amount: string;
  status: "Aprovado" | "Estornado";
}

const transactions: Transaction[] = [
  { date: "08/03/2026", id: "TXN-90281", type: "Crédito", amount: "R$ 1.200,00", status: "Aprovado" },
  { date: "08/03/2026", id: "TXN-90282", type: "Débito", amount: "R$ 450,00", status: "Aprovado" },
  { date: "08/03/2026", id: "TXN-90283", type: "Crédito", amount: "R$ 2.000,00", status: "Estornado" },
  { date: "07/03/2026", id: "TXN-90270", type: "Débito", amount: "R$ 1.000,00", status: "Aprovado" },
  { date: "07/03/2026", id: "TXN-90265", type: "Crédito", amount: "R$ 800,00", status: "Aprovado" },
  { date: "06/03/2026", id: "TXN-90250", type: "Débito", amount: "R$ 320,00", status: "Estornado" },
  { date: "06/03/2026", id: "TXN-90248", type: "Crédito", amount: "R$ 5.600,00", status: "Aprovado" },
];

export function TransactionTable() {
  const handleReverse = (id: string) => {
    toast.info(`Estorno solicitado para ${id}`);
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm">
      <div className="p-5 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground">Últimas Transações</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-xs font-medium text-muted-foreground">Data</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground">ID Transação</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground">Tipo</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground">Valor</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground">Status</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id} className="hover:bg-muted/30">
              <TableCell className="text-sm text-muted-foreground">{tx.date}</TableCell>
              <TableCell className="text-sm font-medium text-foreground">{tx.id}</TableCell>
              <TableCell className="text-sm text-foreground">{tx.type}</TableCell>
              <TableCell className="text-sm font-medium text-foreground">{tx.amount}</TableCell>
              <TableCell>
                <Badge
                  variant={tx.status === "Aprovado" ? "success" : "destructive"}
                  className="rounded-full text-[11px] font-medium normal-case tracking-normal"
                >
                  {tx.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  onClick={() => handleReverse(tx.id)}
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
