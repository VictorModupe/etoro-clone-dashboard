import { ReactNode } from "react";
import { TradingSidebar } from "./TradingSidebar";
import { MarketTicker } from "./MarketTicker";
import { ApiKeyManager } from "./ApiKeyManager";
import { Button } from "@/components/ui/button";
import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

interface TradingLayoutProps {
  children: ReactNode;
}

export function TradingLayout({ children }: TradingLayoutProps) {
  return (
    <div className="min-h-screen bg-background pl-16 lg:pl-20">
      {/* Sidebar */}
      <TradingSidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top navigation */}
        <header className="bg-gradient-card border-b border-border px-4 lg:px-6 py-4 shadow-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search markets, assets..." 
                  className="pl-10 bg-muted/30 border-border/50 text-foreground placeholder:text-muted-foreground focus:bg-muted/50 transition-colors"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <ApiKeyManager />
              <Button variant="ghost" size="sm" className="hover:bg-muted/50 text-foreground">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Market ticker */}
        <MarketTicker />
        
        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6 space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}