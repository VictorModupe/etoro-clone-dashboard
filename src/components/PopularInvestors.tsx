import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Investor {
  name: string;
  description: string;
  copiers: number;
  performance: number;
  risk: number;
  avatar: string;
}

const investorsData: Investor[] = [
  {
    name: "Basic Capital",
    description: "Conservative growth strategy",
    copiers: 985,
    performance: 15.2,
    risk: 3,
    avatar: "🏢"
  },
  {
    name: "Prosperity Trades",
    description: "High-yield investments",
    copiers: 985,
    performance: 22.8,
    risk: 6,
    avatar: "💰"
  },
  {
    name: "House Of Crypto",
    description: "Cryptocurrency specialist",
    copiers: 978,
    performance: 45.6,
    risk: 8,
    avatar: "₿"
  },
  {
    name: "Stock Talk Weekly",
    description: "Weekly market analysis",
    copiers: 890,
    performance: 18.4,
    risk: 4,
    avatar: "📊"
  },
  {
    name: "Photontradingfx",
    description: "Forex trading expert",
    copiers: 88,
    performance: 12.7,
    risk: 5,
    avatar: "💱"
  }
];

export function PopularInvestors() {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">
            These investors have outperformed the
          </p>
          <p className="font-semibold">
            <span className="text-trading-green">SPX500 Index (Non Expiry)</span>{" "}
            <span className="text-trading-green font-bold">(5.88%)</span>{" "}
            over the last 12 months
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {investorsData.map((investor, index) => (
          <div key={investor.name} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">
              {investor.avatar}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-sm">{investor.name}</h3>
                <span className="text-xs text-trading-blue font-medium">
                  ({investor.copiers} Copiers)
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {investor.description}
              </p>
              
              {/* Performance bar */}
              <div className="mt-2">
                <Progress 
                  value={(investor.performance / 50) * 100} 
                  className="h-2"
                />
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm font-semibold text-trading-green">
                +{investor.performance}%
              </div>
              <div className="text-xs text-muted-foreground">
                Risk: {investor.risk}/10
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button variant="outline" className="w-full">
          Discover CopyTrader →
        </Button>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        Past performance is not an indication of future results
      </p>
    </div>
  );
}