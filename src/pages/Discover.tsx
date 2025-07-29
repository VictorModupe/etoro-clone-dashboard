import { TradingLayout } from "@/components/TradingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Star, Users, Globe } from "lucide-react";

const trendingStocks = [
  { symbol: "NVDA", name: "NVIDIA", change: "+5.2%", volume: "125M", sector: "Technology" },
  { symbol: "META", name: "Meta Platforms", change: "+3.8%", volume: "89M", sector: "Technology" },
  { symbol: "AMD", name: "Advanced Micro Devices", change: "+4.1%", volume: "112M", sector: "Technology" },
  { symbol: "COIN", name: "Coinbase", change: "+7.3%", volume: "67M", sector: "Financial" }
];

const marketSectors = [
  { name: "Technology", performance: "+2.4%", color: "bg-blue-500" },
  { name: "Healthcare", performance: "+1.2%", color: "bg-green-500" },
  { name: "Finance", performance: "-0.8%", color: "bg-red-500" },
  { name: "Energy", performance: "+3.1%", color: "bg-yellow-500" },
  { name: "Consumer", performance: "+0.5%", color: "bg-purple-500" },
  { name: "Real Estate", performance: "-1.2%", color: "bg-orange-500" }
];

const topTraders = [
  { name: "John_Trader", profit: "+142%", followers: "23.5K", verified: true },
  { name: "MarketMaven", profit: "+89%", followers: "18.2K", verified: true },
  { name: "CryptoKing", profit: "+156%", followers: "31.7K", verified: false },
  { name: "StockGuru", profit: "+98%", followers: "15.9K", verified: true }
];

const Discover = () => {
  return (
    <TradingLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Discover</h1>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Globe className="h-4 w-4 mr-2" />
              Global Markets
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-trading-green" />
                Trending Now
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trendingStocks.map((stock) => (
                <div key={stock.symbol} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{stock.symbol}</h3>
                      <Badge variant="secondary">{stock.sector}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{stock.name}</p>
                    <p className="text-xs text-muted-foreground">Vol: {stock.volume}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-trading-green">{stock.change}</p>
                    <Button size="sm" variant="outline" className="mt-2">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                Top Traders
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topTraders.map((trader) => (
                <div key={trader.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary text-sm">
                        {trader.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{trader.name}</h3>
                        {trader.verified && <Star className="h-3 w-3 text-yellow-500" />}
                      </div>
                      <p className="text-sm text-muted-foreground">{trader.followers} followers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-trading-green">{trader.profit}</p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Follow
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Market Sectors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {marketSectors.map((sector) => (
                <div key={sector.name} className="p-4 border rounded-lg text-center hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className={`w-12 h-12 ${sector.color} rounded-full mx-auto mb-3 opacity-80`}></div>
                  <h3 className="font-semibold text-sm">{sector.name}</h3>
                  <p className={`text-sm mt-1 ${sector.performance.startsWith('+') ? 'text-trading-green' : 'text-trading-red'}`}>
                    {sector.performance}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </TradingLayout>
  );
};

export default Discover;