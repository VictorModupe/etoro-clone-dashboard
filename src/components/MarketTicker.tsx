import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TickerItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  icon?: string;
}

const mockMarketData: TickerItem[] = [
  { symbol: "EUR/USD", name: "Euro to USD", price: 1.15409, change: -0.00, changePercent: -0.39 },
  { symbol: "BTC", name: "Bitcoin", price: 117674, change: -377.00, changePercent: -0.32 },
  { symbol: "ETH", name: "Ethereum", price: 3765.9, change: -31.90, changePercent: -0.84 },
  { symbol: "SPX", name: "S&P 500 Index", price: 6377.0, change: -13.50, changePercent: -0.21 },
  { symbol: "US100", name: "US 100 Cash CFD", price: 23358.9, change: -10.10, changePercent: -0.04 },
  { symbol: "AAPL", name: "Apple Inc", price: 228.87, change: 2.45, changePercent: 1.08 },
  { symbol: "TSLA", name: "Tesla Inc", price: 347.12, change: -8.23, changePercent: -2.31 },
];

export function MarketTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockMarketData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border-b border-border py-2 overflow-hidden">
      <div className="flex items-center space-x-8 animate-marquee">
        {mockMarketData.map((item, index) => (
          <div 
            key={item.symbol}
            className={cn(
              "flex items-center space-x-2 min-w-0 transition-opacity duration-500",
              index === currentIndex ? "opacity-100" : "opacity-70"
            )}
          >
            <span className="font-semibold text-sm">{item.symbol}</span>
            <span className="text-sm font-mono">{item.price.toLocaleString()}</span>
            <span className={cn(
              "text-sm font-medium",
              item.change >= 0 ? "text-trading-green" : "text-trading-red"
            )}>
              {item.change >= 0 ? "+" : ""}{item.change.toFixed(2)} ({item.changePercent >= 0 ? "+" : ""}{item.changePercent.toFixed(2)}%)
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 text-center">
        <a 
          href="#" 
          className="text-xs text-trading-blue hover:underline"
        >
          Track all markets on TradingView
        </a>
      </div>
    </div>
  );
}