import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TradingLayout } from "./TradingLayout";
import { BigMoversHeatmap } from "./BigMoversHeatmap";
import { PopularInvestors } from "./PopularInvestors";
import { MarketDataTable } from "./MarketDataTable";
import { TopStories } from "./TopStories";
import { AccountVerification } from "./AccountVerification";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Table, FileText } from "lucide-react";

interface ResponsiveTradingViewProps {
  children?: React.ReactNode;
}

export function ResponsiveTradingView({ children }: ResponsiveTradingViewProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <TradingLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Account verification - always visible */}
        <AccountVerification />
        
        {/* Desktop Layout - hidden on tablet/mobile */}
        <div className="hidden lg:block space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <BigMoversHeatmap />
            </div>
            <div className="lg:col-span-1">
              <PopularInvestors />
            </div>
          </div>
          <MarketDataTable />
          <TopStories />
        </div>

        {/* Tablet/Mobile Layout with Tabs */}
        <div className="lg:hidden">
          <Card className="bg-gradient-card shadow-trading">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-muted/30">
                <TabsTrigger 
                  value="overview" 
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <TrendingUp className="h-4 w-4" />
                  <span className="hidden sm:inline">Overview</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="investors" 
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Investors</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="markets" 
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Table className="h-4 w-4" />
                  <span className="hidden sm:inline">Markets</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="stories" 
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">News</span>
                </TabsTrigger>
              </TabsList>

              <div className="p-4">
                <TabsContent value="overview" className="mt-0">
                  <BigMoversHeatmap />
                </TabsContent>

                <TabsContent value="investors" className="mt-0">
                  <PopularInvestors />
                </TabsContent>

                <TabsContent value="markets" className="mt-0">
                  <MarketDataTable />
                </TabsContent>

                <TabsContent value="stories" className="mt-0">
                  <TopStories />
                </TabsContent>
              </div>
            </Tabs>
          </Card>
        </div>

        {children}
      </div>
    </TradingLayout>
  );
}