import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stories = [
  {
    id: 1,
    title: "USD/JPY: Dollar Nears ¥149 Moments Before Pair Gets Sandwiched Between Rate Decisions",
    source: "TradingView",
    time: "8 hours ago",
    symbol: "USD/JPY",
    icons: ["🔍", "🟠", "⚫", "⚪"]
  },
  {
    id: 2,
    title: "SPX: S&P 500 Futures Jump After Broad Index Logs Yet Another Record High. Big Week Unfolds.",
    source: "MarketWatch",
    time: "11 hours ago",
    symbol: "SPX",
    icons: ["🇺🇸", "🟠"]
  },
  {
    id: 3,
    title: "EUR/USD: Euro Crashes 1.3% for Worst Day Since May. Why the Selloff After the US-EU Deal?",
    source: "FXStreet",
    time: "yesterday",
    symbol: "EUR/USD",
    icons: ["🇪🇺", "ℹ️"]
  },
  {
    id: 4,
    title: "ETH/USD: Ether Tops $3,900 in Monster July Run — Up 60% as Bitcoin Can't Even Play Catch Up",
    source: "CoinDesk",
    time: "2 days ago",
    symbol: "ETH/USD",
    icons: ["💎", "🔍", "🟠", "🟠"]
  },
  {
    id: 5,
    title: "IXIC: Nasdaq Composite Futures Up Ahead of More Big Tech Earnings. Here's the Roster.",
    source: "Yahoo Finance",
    time: "2 days ago",
    symbol: "IXIC",
    icons: ["🇺🇸", "🟠"]
  },
  {
    id: 6,
    title: "EUR/USD: Euro Ticks Up to $1.1750 on US-EU Deal — Here's What Traders Are Watching This Week",
    source: "Reuters",
    time: "3 days ago",
    symbol: "EUR/USD",
    icons: ["🇪🇺", "🟠"]
  }
];

export function TopStories() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-xl font-bold">Top Stories</CardTitle>
        <span className="text-sm text-muted-foreground">17</span>
      </CardHeader>
      <CardContent className="space-y-4 p-0">
        {stories.map((story, index) => (
          <div 
            key={story.id}
            className="p-4 hover:bg-muted/50 transition-colors cursor-pointer border-b border-border last:border-b-0"
          >
            <div className="space-y-2">
              <h3 className="font-medium text-sm leading-tight line-clamp-2">
                <span className="font-semibold text-trading-blue">{story.symbol}:</span>{" "}
                {story.title.replace(`${story.symbol}: `, "")}
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {story.icons.map((icon, idx) => (
                      <span key={idx} className="text-xs">{icon}</span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{story.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}