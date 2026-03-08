import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardCards } from "@/components/DashboardCards";
import { TransactionTable } from "@/components/TransactionTable";
import { TransferModal } from "@/components/TransferModal";
import { Button } from "@/components/ui/button";
import { Plus, Menu } from "lucide-react";

const Index = () => {
  const [transferOpen, setTransferOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center justify-between border-b-2 border-foreground/10 px-6 bg-card">
            <div className="flex items-center gap-3">
              <SidebarTrigger>
                <Menu className="h-5 w-5" />
              </SidebarTrigger>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Visão Geral
              </span>
            </div>
            <Button
              onClick={() => setTransferOpen(true)}
              className="font-bold uppercase text-xs tracking-wider border-2 border-primary shadow-[2px_2px_0_0_hsl(var(--foreground))] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <Plus className="h-4 w-4 mr-1" />
              Nova Transferência
            </Button>
          </header>

          <main className="flex-1 p-6 space-y-6">
            <DashboardCards />
            <TransactionTable />
          </main>
        </div>
      </div>

      <TransferModal open={transferOpen} onOpenChange={setTransferOpen} />
    </SidebarProvider>
  );
};

export default Index;
