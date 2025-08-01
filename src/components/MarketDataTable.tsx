import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MarketDataService, MarketData } from "@/services/marketDataService";

export function MarketDataTable() {
  const [selectedFilter, setSelectedFilter] = useState("Overview");
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const service = MarketDataService.getInstance();
        const data = await service.getMarketData();
        setMarketData(data);
      } catch (error) {
        console.error('Failed to load market data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-card rounded-lg shadow-card p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-muted rounded w-1/4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const marketDataRows = [
  {
    ticker: "AUDCAD",
    flag: "🇦🇺🇨🇦",
    price: 0.896940,
    changePercent: 0.14,
    change: 0.001220,
    bid: 0.896880,
    ask: 0.897030,
    high: 0.897470,
    low: 0.893820
  },
  {
    ticker: "AUDCHF",
    flag: "🇦🇺🇨🇭",
    price: 0.525000,
    changePercent: 0.23,
    change: 0.001200,
    bid: 0.524970,
    ask: 0.525090,
    high: 0.525530,
    low: 0.523300
  },
  {
    ticker: "AUDEUR",
    flag: "🇦🇺🇪🇺",
    price: 0.5640,
    changePercent: 0.25,
    change: 0.0014,
    bid: 0.5639,
    ask: 0.5641,
    high: 0.5647,
    low: 0.5619
  },
  {
    ticker: "AUDGBP",
    flag: "🇦🇺🇬🇧",
    price: 0.4878,
    changePercent: 0.03,
    change: 0.0001,
    bid: 0.4878,
    ask: 0.4886,
    high: 0.4889,
    low: 0.4871
  },
  {
    ticker: "AUDJPY",
    flag: "🇦🇺🇯🇵",
    price: 96.691,
    changePercent: -0.21,
    change: -0.199,
    bid: 96.694,
    ask: 96.716,
    high: 96.944,
    low: 96.564
  },
  {
    ticker: "AUDNZD",
    flag: "🇦🇺🇳🇿",
    price: 1.093460,
    changePercent: 0.15,
    change: 0.001650,
    bid: 1.093750,
    ask: 1.093950,
    high: 1.093850,
    low: 1.091630
  },
  {
    ticker: "AUDUSD",
    flag: "🇦🇺🇺🇸",
    price: 0.65126,
    changePercent: -0.12,
    change: -0.00079,
    bid: 0.65122,
    ask: 0.65135,
    high: 0.65300,
    low: 0.64963
  },
  {
    ticker: "CADAUD",
    flag: "🇨🇦🇦🇺",
    price: 1.1144,
    changePercent: -0.13,
    change: -0.0014,
    bid: 1.1145,
    ask: 1.1153,
    high: 1.1181,
    low: 1.1144
  }
];

  // Remove the old export and update with the existing component logic

  return (
    <div className="bg-gradient-card rounded-lg shadow-trading border border-border/50">
      {/* Header */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Markets</h2>
          <div className="flex items-center space-x-2">
            <Button variant="secondary" size="sm" className="bg-trading-red/10 text-trading-red border-trading-red/20 hover:bg-trading-red/20">
              Markets are shaking
            </Button>
            <Button variant="secondary" size="sm" className="bg-trading-green/10 text-trading-green border-trading-green/20 hover:bg-trading-green/20">
              Outperformers to Watch
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant={selectedFilter === "Overview" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedFilter("Overview")}
              className="bg-primary hover:bg-primary-hover"
            >
              Overview
            </Button>
            <div className="text-sm text-muted-foreground flex items-center space-x-1">
              <span>📊</span>
              <span>{marketData.length} MATCHES</span>
            </div>
          </div>
          
          <Button variant="outline" size="sm" className="border-border/50 hover:bg-muted/50">
            Major, Minor Pairs ▼
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/30">
            <tr className="text-left">
              <th className="px-6 py-4 text-sm font-medium text-muted-foreground">
                TICKER<br />{marketData.length} MATCHES
              </th>
              <th className="px-6 py-4 text-sm font-medium text-muted-foreground">PRICE</th>
              <th className="px-6 py-4 text-sm font-medium text-muted-foreground">CHG %</th>
              <th className="px-6 py-4 text-sm font-medium text-muted-foreground">CHG</th>
              <th className="px-6 py-4 text-sm font-medium text-muted-foreground">BID</th>
              <th className="px-6 py-4 text-sm font-medium text-muted-foreground">ASK</th>
              <th className="px-6 py-4 text-sm font-medium text-muted-foreground">HIGH</th>
              <th className="px-6 py-4 text-sm font-medium text-muted-foreground">LOW</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {marketData.map((item, index) => (
              <tr key={item.ticker} className="hover:bg-muted/20 transition-all duration-200 hover:shadow-sm cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{item.flag}</span>
                    <span className="font-semibold text-trading-blue">{item.ticker}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-sm font-medium text-foreground">{item.price}</td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "font-semibold text-sm px-2 py-1 rounded",
                    item.changePercent >= 0 
                      ? "text-trading-green bg-trading-green/10" 
                      : "text-trading-red bg-trading-red/10"
                  )}>
                    {item.changePercent >= 0 ? "+" : ""}{item.changePercent.toFixed(2)}%
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "font-medium text-sm",
                    item.change >= 0 ? "text-trading-green" : "text-trading-red"
                  )}>
                    {item.change >= 0 ? "+" : ""}{item.change.toFixed(6)}
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-sm text-muted-foreground">{item.bid}</td>
                <td className="px-6 py-4 font-mono text-sm text-muted-foreground">{item.ask}</td>
                <td className="px-6 py-4 font-mono text-sm text-muted-foreground">{item.high}</td>
                <td className="px-6 py-4 font-mono text-sm text-muted-foreground">{item.low}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}