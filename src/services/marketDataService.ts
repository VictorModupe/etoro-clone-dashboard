// Market Data Service
// Note: For real-time market data, you would typically use APIs like:
// - Alpha Vantage (free tier available)
// - Yahoo Finance API 
// - IEX Cloud
// - Polygon.io
// - TradingView API

export interface MarketData {
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

export interface TickerItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  icon?: string;
}

export interface StockData {
  symbol: string;
  name: string;
  change: number;
  size: string;
  logo: string;
}

export interface Investor {
  name: string;
  description: string;
  copiers: number;
  performance: number;
  risk: number;
  avatar: string;
}

export interface NewsStory {
  id: number;
  title: string;
  source: string;
  time: string;
  symbol: string;
  icons: string[];
}

// Service class to handle data fetching
export class MarketDataService {
  private static instance: MarketDataService;
  
  private constructor() {}
  
  static getInstance(): MarketDataService {
    if (!MarketDataService.instance) {
      MarketDataService.instance = new MarketDataService();
    }
    return MarketDataService.instance;
  }

  // For production, these would make actual API calls
  // Example with Alpha Vantage (free API):
  // async getTickerData(): Promise<TickerItem[]> {
  //   const API_KEY = localStorage.getItem('ALPHA_VANTAGE_API_KEY');
  //   if (!API_KEY) {
  //     console.warn('API key not found. Using mock data.');
  //     return this.getMockTickerData();
  //   }
  //   
  //   try {
  //     const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=EUR&to_currency=USD&apikey=${API_KEY}`);
  //     const data = await response.json();
  //     // Transform API response to our format
  //     return this.transformApiData(data);
  //   } catch (error) {
  //     console.error('Failed to fetch ticker data:', error);
  //     return this.getMockTickerData();
  //   }
  // }

  async getTickerData(): Promise<TickerItem[]> {
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.getMockTickerData();
  }

  async getMarketData(): Promise<MarketData[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.getMockMarketData();
  }

  async getStockData(): Promise<StockData[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.getMockStockData();
  }

  async getInvestorData(): Promise<Investor[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.getMockInvestorData();
  }

  async getNewsData(): Promise<NewsStory[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.getMockNewsData();
  }

  private getMockTickerData(): TickerItem[] {
    return [
      { symbol: "EUR/USD", name: "Euro to USD", price: 1.15409, change: -0.00, changePercent: -0.39 },
      { symbol: "BTC", name: "Bitcoin", price: 117674, change: -377.00, changePercent: -0.32 },
      { symbol: "ETH", name: "Ethereum", price: 3765.9, change: -31.90, changePercent: -0.84 },
      { symbol: "SPX", name: "S&P 500 Index", price: 6377.0, change: -13.50, changePercent: -0.21 },
      { symbol: "US100", name: "US 100 Cash CFD", price: 23358.9, change: -10.10, changePercent: -0.04 },
      { symbol: "AAPL", name: "Apple Inc", price: 228.87, change: 2.45, changePercent: 1.08 },
      { symbol: "TSLA", name: "Tesla Inc", price: 347.12, change: -8.23, changePercent: -2.31 },
    ];
  }

  private getMockMarketData(): MarketData[] {
    return [
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
  }

  private getMockStockData(): StockData[] {
    return [
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
  }

  private getMockInvestorData(): Investor[] {
    return [
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
  }

  private getMockNewsData(): NewsStory[] {
    return [
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
  }
}