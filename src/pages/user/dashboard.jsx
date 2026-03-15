import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CreditCard,
  File,
  FileSpreadsheet,
  Leaf,
  Smartphone,
  Zap,
  Tv,
  Users,
  Wallet,
  Wifi,
} from "lucide-react";
import React from "react";

function UserDashboard() {
  const transactions = [
    {
      service: "MTN Airtime",
      to: "09048843934",
      amount: "3500",
      status: "pending",
      date: "today",
    },
    {
      service: "GLO Data",
      to: "09048843934",
      amount: "3500",
      status: "success",
      date: "today",
    },
    {
      service: "MTN Airtime",
      to: "09048843934",
      amount: "3500",
      status: "failed",
      date: "today",
    },
  ];

  const services = [
    { name: "Airtime", icon: Smartphone, link: "www.google.com" },
    { name: "Data", icon: Wifi, link: "www.google.com" },
    { name: "Electricity", icon: Zap, link: "www.google.com" },
    { name: "Cable TV", icon: Tv, link: "www.google.com" },
  ];

  const stats = [
    { description: "WALLET BALANCE", icon: CreditCard, value: 4610.0 },
    { description: "WALLET SUMMARY", icon: Wallet, value: 105 },
    { description: "HISTORY", icon: FileSpreadsheet, value: 541005 },
    { description: "REFERRALS", icon: Users, value: 7 },
  ];

  return (
    <div className="flex flex-col m-0 gap-5">
      {/* Welcome   */}
      <div>
        <h1 className="text-2xl lg:text-2xl font-medium ">
          Welcome back, Jessica 👋
        </h1>
        <p className="text-gray-400 mt-1 text-sm">
          Let’s grow your Terra Mint Token (TMT)
        </p>
      </div>

      {/* Stat Card  */}
      <div className="flex flex-row gap-2 justify-center items-center">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card className="flex lg:w-1/4 flex-row p-3 items-end">
              <CardTitle className="icon p-3 bg-blue-400 rounded-md">
                <Icon color="#fff" size={50} />
              </CardTitle>
              <CardContent className="">
                <CardDescription className="text-[11px] font-extralight">
                  {stat.description}
                </CardDescription>
                <p className="text-xl">{stat.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  w-full bg-slate-100 dark:bg-slate-900">
        {/* ATM CARD */}
        <Card className="relative overflow-hidden p-4 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-2xl shadow-xl">
          <div className="flex justify-between items-start">
            <h2 className="text-sm uppercase tracking-widest text-gray-300">
              Wallet Card
            </h2>
            <span className="text-xs text-gray-400">Active</span>
          </div>

          {/* Card Number */}
          <h1 className="text-2xl tracking-widest mt-3 font-mono">
            **** **** **** 3535
          </h1>

          {/* Card Holder */}
          <div className="flex justify-between items-end mt-3">
            <div>
              <p className="text-xs text-gray-400">Account Holder</p>
              <h3 className="text-lg font-semibold">Jessica Brown</h3>
            </div>

            <div>
              <p className="text-xs text-gray-400">Account No</p>
              <h3 className="text-lg font-semibold">34343353</h3>
            </div>
          </div>

          {/* Balance */}
          <div className="mt-6">
            <p className="text-xs text-gray-400">Available Balance</p>
            <h1 className="text-2xl font-bold text-green-400">₦5,000</h1>
          </div>
        </Card>

        {/* TRANSACTION SUMMARY */}
        <Card className="p-6 rounded-2xl shadow-sm bg-white dark:bg-slate-800">
          <h1 className="text-lg font-semibold mb-4">Transaction Overview</h1>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">Wallet Balance</p>
              <h2 className="text-green-500 font-bold text-lg">₦4,610</h2>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">Total Spending</p>
              <h2 className="text-red-500 font-semibold">₦18,310</h2>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">Total Funding</p>
              <h2 className="text-blue-500 font-semibold">₦22,920</h2>
            </div>
          </div>
        </Card>

        {/* BREAKDOWN TABLE */}
        <Card className="p-6 rounded-2xl shadow-sm bg-white dark:bg-slate-800">
          <h1 className="text-lg font-semibold mb-4">Wallet Breakdown</h1>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="text-sm">
              <TableRow>
                <TableCell>Referral Earnings</TableCell>
                <TableCell className="text-right">₦0.00</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Wallet Spending</TableCell>
                <TableCell className="text-right text-red-500">
                  ₦3,450.00
                </TableCell>
              </TableRow>

              <TableRow className="font-semibold">
                <TableCell>Total Balance</TableCell>
                <TableCell className="text-right text-green-500">
                  ₦4,610.00
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* Quick Services  */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Services</h2>
        <div className="grid grid-cols-4 justify-center gap-4 items-center">
          {services.map((ser, i) => {
            const Icon = ser.icon;
            return (
              <Card className="flex flex-col p-4 gap-2 shadow-md justify-center items-center hover:underline">
                <Icon size={60} className="text-blue-500" />
                <p className="font-medium">{ser.name}</p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <Card className="rounded-2xl">
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="p-4 text-left">Service</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">Amount</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((tx) => {
                  return (
                    <tr className="border-t">
                      <td className="p-4">{tx.service}</td>
                      <td className="p-4">{tx.to}</td>
                      <td className="p-4">₦{tx.amount}</td>
                      <td
                        className={`p-4 ${tx.status === "pending" ? "text-yellow-400" : tx.status === "failed" ? "text-red-500" : "text-green-500"}`}
                      >
                        {tx.status}
                      </td>
                      <td className="p-4">{tx.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default UserDashboard;
