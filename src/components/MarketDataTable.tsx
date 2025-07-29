import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MarketData {
  ticker: string;
  flag: string;
  price: number;
  changePercent: number;
  change: number;
  bid: number;
  ask: number;
  high: number;
  low: number;
}

const marketData: MarketData[] = [
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

export function MarketDataTable() {
  const [selectedFilter, setSelectedFilter] = useState("Overview");

  return (
    <div className="bg-card rounded-lg shadow-card">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Markets</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Markets are shaking
            </Button>
            <Button variant="outline" size="sm">
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
            >
              Overview
            </Button>
            <div className="text-sm text-muted-foreground">
              📊 49 MATCHES
            </div>
          </div>
          
          <Button variant="outline" size="sm">
            Major, Minor Pairs ▼
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr className="text-left">
              <th className="px-4 py-3 text-sm font-medium text-muted-foreground">
                TICKER<br />49 MATCHES
              </th>
              <th className="px-4 py-3 text-sm font-medium text-muted-foreground">PRICE</th>
              <th className="px-4 py-3 text-sm font-medium text-muted-foreground">CHG %</th>
              <th className="px-4 py-3 text-sm font-medium text-muted-foreground">CHG</th>
              <th className="px-4 py-3 text-sm font-medium text-muted-foreground">BID</th>
              <th className="px-4 py-3 text-sm font-medium text-muted-foreground">ASK</th>
              <th className="px-4 py-3 text-sm font-medium text-muted-foreground">HIGH</th>
              <th className="px-4 py-3 text-sm font-medium text-muted-foreground">LOW</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {marketData.map((item, index) => (
              <tr key={item.ticker} className="hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{item.flag}</span>
                    <span className="font-medium text-trading-blue">{item.ticker}</span>
                  </div>
                </td>
                <td className="px-4 py-3 font-mono text-sm">{item.price}</td>
                <td className="px-4 py-3">
                  <span className={cn(
                    "font-medium text-sm",
                    item.changePercent >= 0 ? "text-trading-green" : "text-trading-red"
                  )}>
                    {item.changePercent >= 0 ? "+" : ""}{item.changePercent.toFixed(2)}%
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={cn(
                    "font-medium text-sm",
                    item.change >= 0 ? "text-trading-green" : "text-trading-red"
                  )}>
                    {item.change >= 0 ? "+" : ""}{item.change.toFixed(6)}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-sm">{item.bid}</td>
                <td className="px-4 py-3 font-mono text-sm">{item.ask}</td>
                <td className="px-4 py-3 font-mono text-sm">{item.high}</td>
                <td className="px-4 py-3 font-mono text-sm">{item.low}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}