import { cn } from "@/lib/utils";

interface StockData {
  symbol: string;
  name: string;
  change: number;
  size: string;
  logo: string;
}

const stocksData: StockData[] = [
  { symbol: "NVDA", name: "NVIDIA Corp", change: 3.2, size: "xl", logo: "🟢" },
  { symbol: "AAPL", name: "Apple Inc", change: 2.1, size: "lg", logo: "🍎" },
  { symbol: "MSFT", name: "Microsoft", change: 1.8, size: "xl", logo: "🔷" },
  { symbol: "GOOGL", name: "Alphabet", change: 1.5, size: "lg", logo: "🔍" },
  { symbol: "AMZN", name: "Amazon", change: 0.9, size: "md", logo: "📦" },
  { symbol: "TSLA", name: "Tesla", change: -2.1, size: "md", logo: "⚡" },
  { symbol: "META", name: "Meta", change: 1.2, size: "sm", logo: "📘" },
  { symbol: "BRK.B", name: "Berkshire", change: 0.5, size: "sm", logo: "💎" },
  { symbol: "V", name: "Visa", change: 0.8, size: "sm", logo: "💳" },
  { symbol: "JPM", name: "JP Morgan", change: -0.3, size: "sm", logo: "🏦" },
  { symbol: "WMT", name: "Walmart", change: 0.4, size: "xs", logo: "🛒" },
  { symbol: "LLY", name: "Eli Lilly", change: -1.1, size: "xs", logo: "💊" },
];

const sizeClasses = {
  xl: "col-span-4 row-span-3 text-2xl",
  lg: "col-span-3 row-span-2 text-xl",
  md: "col-span-2 row-span-2 text-lg",
  sm: "col-span-2 row-span-1 text-base",
  xs: "col-span-1 row-span-1 text-sm"
};

export function BigMoversHeatmap() {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <h2 className="text-xl font-bold mb-4">Big Movers</h2>
      
      {/* Category tabs */}
      <div className="flex space-x-4 mb-4 text-sm">
        <button className="px-3 py-1 bg-primary text-primary-foreground rounded">
          Electronic Technology
        </button>
        <button className="px-3 py-1 text-muted-foreground hover:text-foreground">
          Technology Services
        </button>
        <button className="px-3 py-1 text-muted-foreground hover:text-foreground">
          Finance
        </button>
        <button className="px-3 py-1 text-muted-foreground hover:text-foreground">
          Retail Trade
        </button>
        <button className="px-3 py-1 text-muted-foreground hover:text-foreground">
          Consumer...
        </button>
        <button className="px-3 py-1 text-muted-foreground hover:text-foreground">
          Energy...
        </button>
      </div>

      {/* Heatmap grid */}
      <div className="grid grid-cols-12 grid-rows-6 gap-1 h-80 mb-4">
        {stocksData.map((stock) => (
          <div
            key={stock.symbol}
            className={cn(
              "relative rounded p-2 flex flex-col justify-between cursor-pointer transition-all hover:scale-105",
              sizeClasses[stock.size as keyof typeof sizeClasses],
              stock.change > 0 
                ? "bg-trading-green/10 border border-trading-green/20 hover:bg-trading-green/20" 
                : "bg-trading-red/10 border border-trading-red/20 hover:bg-trading-red/20"
            )}
          >
            <div className="flex items-start justify-between">
              <span className="font-bold text-foreground">{stock.symbol}</span>
              <span className="text-xs">{stock.logo}</span>
            </div>
            
            <div className="mt-auto">
              <div className={cn(
                "text-xs font-medium",
                stock.change > 0 ? "text-trading-green" : "text-trading-red"
              )}>
                {stock.change > 0 ? "+" : ""}{stock.change}%
              </div>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b">
              <div 
                className={cn(
                  "h-full rounded-b transition-all",
                  stock.change > 0 ? "bg-trading-green" : "bg-trading-red"
                )}
                style={{ width: `${Math.min(Math.abs(stock.change) * 30, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Significant gainers and losers from your portfolio and all your watchlists since 01:00 last trading day.
      </p>
    </div>
  );
}