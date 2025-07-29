import { TradingLayout } from "@/components/TradingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet as WalletIcon, CreditCard, TrendingUp, ArrowUpRight, ArrowDownLeft, Plus, Minus } from "lucide-react";

const portfolioData = [
  { symbol: "AAPL", shares: 50, value: "$9,675.00", change: "+2.4%", trend: "up" },
  { symbol: "TSLA", shares: 25, value: "$6,696.00", change: "-1.2%", trend: "down" },
  { symbol: "MSFT", shares: 30, value: "$12,671.10", change: "+0.8%", trend: "up" },
  { symbol: "GOOGL", shares: 15, value: "$2,493.15", change: "+1.5%", trend: "up" }
];

const recentActivity = [
  { type: "deposit", amount: "$1,000.00", date: "2024-01-15", status: "completed" },
  { type: "buy", symbol: "AAPL", amount: "$925.00", date: "2024-01-14", status: "completed" },
  { type: "sell", symbol: "TSLA", amount: "$1,230.00", date: "2024-01-12", status: "completed" },
  { type: "withdraw", amount: "$500.00", date: "2024-01-10", status: "pending" }
];

const Wallet = () => {
  const totalValue = "$31,535.25";
  const cashBalance = "$2,485.30";
  const todayChange = "+$285.42 (+0.91%)";

  return (
    <TradingLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Wallet</h1>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Deposit
            </Button>
            <Button variant="outline">
              <Minus className="h-4 w-4 mr-2" />
              Withdraw
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
              <WalletIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalValue}</div>
              <p className="text-xs text-trading-green">
                {todayChange}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cash Balance</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{cashBalance}</div>
              <p className="text-xs text-muted-foreground">
                Available for trading
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Day's Return</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-trading-green">+0.91%</div>
              <p className="text-xs text-muted-foreground">
                Performance today
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Holdings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {portfolioData.map((holding) => (
                <div key={holding.symbol} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary text-sm">
                        {holding.symbol.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{holding.symbol}</h3>
                      <p className="text-sm text-muted-foreground">{holding.shares} shares</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{holding.value}</p>
                    <div className="flex items-center">
                      {holding.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3 text-trading-green mr-1" />
                      ) : (
                        <ArrowDownLeft className="h-3 w-3 text-trading-red mr-1" />
                      )}
                      <span className={`text-sm ${holding.trend === "up" ? "text-trading-green" : "text-trading-red"}`}>
                        {holding.change}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === "deposit" ? "bg-trading-green/10" :
                      activity.type === "withdraw" ? "bg-trading-red/10" :
                      activity.type === "buy" ? "bg-primary/10" : "bg-secondary/10"
                    }`}>
                      {activity.type === "deposit" && <Plus className="h-4 w-4 text-trading-green" />}
                      {activity.type === "withdraw" && <Minus className="h-4 w-4 text-trading-red" />}
                      {activity.type === "buy" && <ArrowUpRight className="h-4 w-4 text-primary" />}
                      {activity.type === "sell" && <ArrowDownLeft className="h-4 w-4 text-secondary-foreground" />}
                    </div>
                    <div>
                      <h3 className="font-semibold capitalize">
                        {activity.type} {activity.symbol && activity.symbol}
                      </h3>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{activity.amount}</p>
                    <Badge 
                      variant={activity.status === "completed" ? "default" : "secondary"}
                      className={activity.status === "completed" ? "bg-trading-green" : ""}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </TradingLayout>
  );
};

export default Wallet;