import { TradingLayout } from "@/components/TradingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Star, TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const watchlistItems = [
  { symbol: "AAPL", name: "Apple Inc.", price: "$193.50", change: "+2.4%", trend: "up" },
  { symbol: "TSLA", name: "Tesla Inc.", price: "$267.84", change: "-1.2%", trend: "down" },
  { symbol: "MSFT", name: "Microsoft Corp.", price: "$422.37", change: "+0.8%", trend: "up" },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: "$166.21", change: "+1.5%", trend: "up" },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: "$785.38", change: "+3.2%", trend: "up" }
];

const Watchlist = () => {
  return (
    <TradingLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Watchlist</h1>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add to Watchlist
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-500" />
              My Watchlist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {watchlistItems.map((item) => (
                <div key={item.symbol} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">{item.symbol.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.symbol}</h3>
                      <p className="text-sm text-muted-foreground">{item.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold">{item.price}</p>
                      <div className="flex items-center">
                        {item.trend === "up" ? (
                          <TrendingUp className="h-3 w-3 text-trading-green mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-trading-red mr-1" />
                        )}
                        <span className={`text-sm ${item.trend === "up" ? "text-trading-green" : "text-trading-red"}`}>
                          {item.change}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Trade
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </TradingLayout>
  );
};

export default Watchlist;