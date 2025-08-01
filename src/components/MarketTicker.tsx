import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MarketDataService, TickerItem } from "@/services/marketDataService";

export function MarketTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [marketData, setMarketData] = useState<TickerItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const service = MarketDataService.getInstance();
        const data = await service.getTickerData();
        setMarketData(data);
      } catch (error) {
        console.error('Failed to load ticker data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  useEffect(() => {
    if (marketData.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % marketData.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [marketData.length]);

  if (loading) {
    return (
      <div className="bg-gradient-card border-b border-border py-3 overflow-hidden shadow-card">
        <div className="flex items-center justify-center px-4">
          <div className="animate-pulse text-muted-foreground">Loading market data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-card border-b border-border py-3 overflow-hidden shadow-card">
      <div className="flex items-center space-x-6 lg:space-x-8 animate-marquee px-4">
        {marketData.map((item, index) => (
          <div 
            key={item.symbol}
            className={cn(
              "flex items-center space-x-2 min-w-0 transition-all duration-500 hover:scale-105",
              index === currentIndex ? "opacity-100 shadow-glow rounded px-2 py-1" : "opacity-70"
            )}
          >
            <span className="font-semibold text-sm text-foreground">{item.symbol}</span>
            <span className="text-sm font-mono text-foreground">{item.price.toLocaleString()}</span>
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
          className="text-xs text-trading-blue hover:underline transition-colors"
        >
          Track all markets on TradingView
        </a>
      </div>
    </div>
  );
}