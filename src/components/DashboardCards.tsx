import { ArrowDownLeft, ArrowUpRight, Wallet } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

function StatCard({ label, value, icon, highlight }: StatCardProps) {
  return (
    <div
      className={`border-2 p-6 transition-all ${
        highlight
          ? "border-primary bg-primary text-primary-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))]"
          : "border-foreground/15 bg-card text-card-foreground shadow-[3px_3px_0_0_hsl(var(--border))]"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold uppercase tracking-widest opacity-70">{label}</span>
        <div className={`p-2 ${highlight ? "bg-primary-foreground/10" : "bg-muted"}`}>
          {icon}
        </div>
      </div>
      <p className="text-3xl font-black font-mono tracking-tight">{value}</p>
    </div>
  );
}

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        label="Saldo Atual"
        value="R$ 24.580,00"
        icon={<Wallet className="h-5 w-5" />}
        highlight
      />
      <StatCard
        label="Entradas do Dia"
        value="R$ 3.200,00"
        icon={<ArrowDownLeft className="h-5 w-5 text-success" />}
      />
      <StatCard
        label="Saídas do Dia"
        value="R$ 1.450,00"
        icon={<ArrowUpRight className="h-5 w-5 text-destructive" />}
      />
    </div>
  );
}
