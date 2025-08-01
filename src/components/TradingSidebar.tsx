import { useState } from "react";
import { 
  Home, 
  Eye, 
  History, 
  Compass, 
  Wallet, 
  Copy,
  UserPlus, 
  CreditCard,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Watchlist", href: "/watchlist", icon: Eye },
  { name: "Transaction History", href: "/history", icon: History },
  { name: "Discover", href: "/discover", icon: Compass },
  { name: "Wallet", href: "/wallet", icon: Wallet },
];

const moreItems = [
  { name: "Copy Trader", href: "/copy-trader", icon: Copy },
  { name: "Invite Friends", href: "/invite", icon: UserPlus },
  { name: "Withdraw Funds", href: "/withdraw", icon: CreditCard },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help & Resources", href: "/help", icon: HelpCircle },
];

interface TradingSidebarProps {
  className?: string;
}

export function TradingSidebar({ className }: TradingSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "fixed top-0 left-0 h-screen bg-sidebar text-sidebar-foreground transition-all duration-300",
      isCollapsed ? "w-14" : "h-30",
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OAK</span>
            </div>
            <span className="font-semibold text-sm">Trading Platform</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent p-2"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* User Profile */}
      <div className="px-4 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-sidebar-accent rounded-full flex items-center justify-center">
            <span className="text-sidebar-foreground font-medium text-sm">VM</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">user-victormodupe</p>
            </div>
          )}
        </div>
        {!isCollapsed && (
          <div className="mt-3">
            <p className="text-2xl font-bold">$ 0.00</p>
            <div className="w-full bg-sidebar-accent rounded-full h-1 mt-2">
              <div className="bg-primary h-1 rounded-full w-0"></div>
            </div>
          </div>
        )}
      </div>

      <Separator className="bg-sidebar-border" />

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 w-15">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center px-2 py-2 text-sm font-light rounded-md transition-colors",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isCollapsed && "justify-center py-5",
                isActive 
                  ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                  : "text-sidebar-foreground"
              )
            }
          >
            {/* <item.icon className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
            {!isCollapsed && item.name } */}
            {isCollapsed && <item.icon className="h-5 w-5" />}
      {!isCollapsed && <span>{item.name}</span>}
          </NavLink>
        ))}

        {!isCollapsed && (
          <>
            <div className="pt-4 pb-2">
              <p className="px-2 text-xs font-semibold text-sidebar-foreground/60 uppercase">
                More
              </p>
            </div>
            {moreItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn( 
                    "pl-10 flex items-center px-2 py-2 text-sm font-light rounded-md transition-colors",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive 
                      ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                      : "text-sidebar-foreground"
                  )
                }
              >
                {/* <item.icon className="h-5 w-5 mr-3" />
                {!isCollapsed && item.name} */}
                {isCollapsed && <item.icon className="h-5 w-5" />}
      {!isCollapsed && <span>{item.name}</span>}
              </NavLink>
            ))}
          </>
        )}
      </nav>

      {/* Deposit Button */}
      <div className="p-4">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          size={isCollapsed ? "sm" : "default"}
        >
          {isCollapsed ? "⚙" : "Deposit Funds"}
        </Button>
        {!isCollapsed && (
          <Button 
            variant="ghost" 
            className="w-full mt-2 text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Switch to Virtual
          </Button>
        )}
      </div>
    </div>
  );
}