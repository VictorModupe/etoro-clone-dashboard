import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function AccountVerification() {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card mb-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {/* Progress steps */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-trading-green" />
              <span className="text-sm font-medium">Create Account</span>
              <span className="w-6 h-6 bg-trading-green text-white rounded-full flex items-center justify-center text-xs">1</span>
            </div>
            
            <div className="w-8 h-px bg-border"></div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Verify</span>
              <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">2</span>
            </div>
            
            <div className="w-8 h-px bg-border"></div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-muted-foreground">Deposit</span>
              <span className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-xs">3</span>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-2">Hi there, is it really you?</h2>
          <p className="text-muted-foreground mb-4">
            Verifying your identity helps us prevent someone else from creating an account in your name.
          </p>
          
          <Button className="bg-primary hover:bg-primary/90">
            Verify Your Account
          </Button>
        </div>

        <div className="ml-6">
          <div className="w-48 h-32 bg-gradient-primary rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            <div className="relative text-white text-center">
              <div className="text-lg font-bold mb-1">OAK</div>
              <div className="text-2xl font-bold text-trading-green">LET'S TALK</div>
              <div className="text-2xl font-bold text-trading-green">VERIFICATION</div>
              <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}