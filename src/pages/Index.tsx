import { TradingLayout } from "@/components/TradingLayout";
import { AccountVerification } from "@/components/AccountVerification";
import { BigMoversHeatmap } from "@/components/BigMoversHeatmap";
import { PopularInvestors } from "@/components/PopularInvestors";
import { MarketDataTable } from "@/components/MarketDataTable";
import { TopStories } from "@/components/TopStories";

const Index = () => {
  return (
    <TradingLayout>
      <div className="max-w-7xl mx-auto space-y-6 bg-black-900">
        {/* Account verification section */}
        <AccountVerification />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Big movers heatmap */}
          <div className="lg:col-span-2">
            <BigMoversHeatmap />
          </div>
          
          {/* Popular investors */}
          <div className="lg:col-span-1">
            <PopularInvestors />
          </div>
        </div>

        {/* Market data table */}
        <MarketDataTable />
        
        {/* Top Stories section */}
        <TopStories />
      </div>
    </TradingLayout>
  );
};

export default Index;
