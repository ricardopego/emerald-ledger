import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

interface TransferModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TransferModal({ open, onOpenChange }: TransferModalProps) {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountId || !amount) {
      toast.error("Preencha todos os campos.");
      return;
    }
    toast.success(`Transferência de R$ ${amount} para conta ${accountId} realizada.`);
    setAccountId("");
    setAmount("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-2 border-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))]">
        <DialogHeader>
          <DialogTitle className="text-xl font-black uppercase tracking-wider">
            Nova Transferência
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Informe os dados da transferência abaixo.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="accountId" className="text-xs uppercase tracking-wider font-bold">
              ID da Conta Destino
            </Label>
            <Input
              id="accountId"
              placeholder="ex: ACC-00421"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
              className="border-2 border-foreground/20 focus:border-primary font-mono"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-xs uppercase tracking-wider font-bold">
              Valor (R$)
            </Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              min="0.01"
              placeholder="0,00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 border-foreground/20 focus:border-primary font-mono text-lg"
            />
          </div>
          <DialogFooter className="pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="border-2 border-foreground/20 font-bold uppercase text-xs tracking-wider">
              Cancelar
            </Button>
            <Button type="submit" className="font-bold uppercase text-xs tracking-wider border-2 border-primary">
              Confirmar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
