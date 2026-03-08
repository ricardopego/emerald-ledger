import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { toast } from "sonner";

interface Transaction {
  date: string;
  id: string;
  type: "Crédito" | "Débito";
  amount: string;
  status: "Aprovado" | "Pendente";
}

const transactions: Transaction[] = [
  { date: "08/03/2026", id: "TXN-90281", type: "Crédito", amount: "R$ 1.200,00", status: "Aprovado" },
  { date: "08/03/2026", id: "TXN-90282", type: "Débito", amount: "R$ 450,00", status: "Aprovado" },
  { date: "08/03/2026", id: "TXN-90283", type: "Crédito", amount: "R$ 2.000,00", status: "Pendente" },
  { date: "07/03/2026", id: "TXN-90270", type: "Débito", amount: "R$ 1.000,00", status: "Aprovado" },
  { date: "07/03/2026", id: "TXN-90265", type: "Crédito", amount: "R$ 800,00", status: "Aprovado" },
  { date: "06/03/2026", id: "TXN-90250", type: "Débito", amount: "R$ 320,00", status: "Pendente" },
  { date: "06/03/2026", id: "TXN-90248", type: "Crédito", amount: "R$ 5.600,00", status: "Aprovado" },
];

export function TransactionTable() {
  const handleReverse = (id: string) => {
    toast.info(`Estorno solicitado para ${id}`);
  };

  return (
    <div className="border-2 border-foreground/15 bg-card shadow-[3px_3px_0_0_hsl(var(--border))]">
      <div className="p-4 border-b-2 border-foreground/10">
        <h2 className="text-sm font-black uppercase tracking-widest">Extrato de Transações</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-b-2 border-foreground/10 hover:bg-transparent">
            <TableHead className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Data</TableHead>
            <TableHead className="text-xs font-bold uppercase tracking-widest text-muted-foreground">ID Transação</TableHead>
            <TableHead className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Tipo</TableHead>
            <TableHead className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Valor</TableHead>
            <TableHead className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Status</TableHead>
            <TableHead className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-right">Ação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id} className="border-b border-foreground/5 hover:bg-muted/50">
              <TableCell className="font-mono text-sm">{tx.date}</TableCell>
              <TableCell className="font-mono text-sm font-semibold">{tx.id}</TableCell>
              <TableCell>
                <span className={`text-sm font-bold ${tx.type === "Crédito" ? "text-success" : "text-destructive"}`}>
                  {tx.type}
                </span>
              </TableCell>
              <TableCell className="font-mono text-sm font-semibold">{tx.amount}</TableCell>
              <TableCell>
                <Badge variant={tx.status === "Aprovado" ? "success" : "warning"}>
                  {tx.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleReverse(tx.id)}
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-destructive"
                >
                  <RotateCcw className="h-3 w-3 mr-1" />
                  Estornar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
