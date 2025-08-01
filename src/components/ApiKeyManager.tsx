import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Settings, Key, Eye, EyeOff } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ApiKeyConfig {
  name: string;
  key: string;
  description: string;
  storageKey: string;
}

const apiConfigs: ApiKeyConfig[] = [
  {
    name: "Alpha Vantage",
    key: "ALPHA_VANTAGE_API_KEY",
    description: "Free tier available - 25 requests per day",
    storageKey: "alpha_vantage_key"
  },
  {
    name: "Yahoo Finance",
    key: "YAHOO_FINANCE_API_KEY", 
    description: "Alternative market data provider",
    storageKey: "yahoo_finance_key"
  },
  {
    name: "Polygon.io",
    key: "POLYGON_API_KEY",
    description: "Real-time and historical market data",
    storageKey: "polygon_key"
  }
];

export function ApiKeyManager() {
  const [apiKeys, setApiKeys] = useState<Record<string, string>>(() => {
    const saved: Record<string, string> = {};
    apiConfigs.forEach(config => {
      const key = localStorage.getItem(config.storageKey);
      if (key) saved[config.storageKey] = key;
    });
    return saved;
  });
  
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});
  const [tempKeys, setTempKeys] = useState<Record<string, string>>({});

  const handleSaveKey = (config: ApiKeyConfig) => {
    const key = tempKeys[config.storageKey];
    if (key) {
      localStorage.setItem(config.storageKey, key);
      setApiKeys(prev => ({ ...prev, [config.storageKey]: key }));
      setTempKeys(prev => ({ ...prev, [config.storageKey]: "" }));
    }
  };

  const handleRemoveKey = (config: ApiKeyConfig) => {
    localStorage.removeItem(config.storageKey);
    setApiKeys(prev => {
      const updated = { ...prev };
      delete updated[config.storageKey];
      return updated;
    });
  };

  const toggleShowKey = (storageKey: string) => {
    setShowKeys(prev => ({ ...prev, [storageKey]: !prev[storageKey] }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center space-x-2">
          <Settings className="h-4 w-4" />
          <span>API Settings</span>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl bg-gradient-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Key className="h-5 w-5" />
            <span>API Key Management</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Alert>
            <AlertDescription>
              To get real market data, configure API keys below. All keys are stored locally in your browser.
              For production use, connect to Supabase for secure key management.
            </AlertDescription>
          </Alert>
          
          {apiConfigs.map((config) => (
            <Card key={config.storageKey} className="bg-muted/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{config.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{config.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {apiKeys[config.storageKey] ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Input
                        type={showKeys[config.storageKey] ? "text" : "password"}
                        value={apiKeys[config.storageKey]}
                        readOnly
                        className="flex-1 bg-muted/50"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleShowKey(config.storageKey)}
                      >
                        {showKeys[config.storageKey] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRemoveKey(config)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Label htmlFor={config.storageKey}>API Key</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id={config.storageKey}
                        type="password"
                        placeholder="Enter your API key..."
                        value={tempKeys[config.storageKey] || ""}
                        onChange={(e) => setTempKeys(prev => ({ 
                          ...prev, 
                          [config.storageKey]: e.target.value 
                        }))}
                        className="flex-1"
                      />
                      <Button
                        onClick={() => handleSaveKey(config)}
                        disabled={!tempKeys[config.storageKey]}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
          
          <Alert>
            <AlertDescription>
              <strong>Note:</strong> Without API keys, the application will use mock data for demonstration purposes.
              For production applications, we recommend using Supabase Edge Functions to securely handle API keys.
            </AlertDescription>
          </Alert>
        </div>
      </DialogContent>
    </Dialog>
  );
}