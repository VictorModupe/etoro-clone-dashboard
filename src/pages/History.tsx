import { TradingLayout } from "@/components/TradingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const transactions = [
  {
    id: "TXN001",
    date: "2024-01-15",
    type: "Buy",
    symbol: "AAPL",
    quantity: 50,
    price: "$185.20",
    total: "$9,260.00",
    status: "Completed"
  },
  {
    id: "TXN002", 
    date: "2024-01-12",
    type: "Sell",
    symbol: "TSLA",
    quantity: 25,
    price: "$245.80",
    total: "$6,145.00",
    status: "Completed"
  },
  {
    id: "TXN003",
    date: "2024-01-10",
    type: "Buy",
    symbol: "MSFT",
    quantity: 30,
    price: "$415.60",
    total: "$12,468.00",
    status: "Pending"
  },
  {
    id: "TXN004",
    date: "2024-01-08",
    type: "Sell",
    symbol: "GOOGL",
    quantity: 15,
    price: "$155.40",
    total: "$2,331.00",
    status: "Completed"
  }
];

const History = () => {
  return (
    <TradingLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Transaction History</h1>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.id}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <Badge variant={transaction.type === "Buy" ? "default" : "secondary"}>
                        {transaction.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold">{transaction.symbol}</TableCell>
                    <TableCell>{transaction.quantity}</TableCell>
                    <TableCell>{transaction.price}</TableCell>
                    <TableCell className="font-semibold">{transaction.total}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={transaction.status === "Completed" ? "default" : "secondary"}
                        className={transaction.status === "Completed" ? "bg-trading-green" : ""}
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </TradingLayout>
  );
};

export default History;