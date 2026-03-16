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
  Check,
  Copy,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React, { useState } from "react";

function UserDashboard() {
  const [copied, setCopied] = useState("");

  const account = {
    company: "Jessica Brown - TMT",
    bank: "Akros MFB",
    accountNumber: "9037709266",
    currency: "NGN",
  };

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

  const copy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className="flex flex-col m-0 gap-5 w-[90vw] lg:w-[80vw] justify-center ">
      {/* Welcome   */}
      <div>
        <h1 className="text-2xl lg:text-2xl font-medium ">
          Welcome back, Jessica 👋
        </h1>
        <p className="text-gray-400 mt-1 text-sm">
          Get data, pay bills keep surfing
        </p>
      </div>

      {/* Stat Card  */}
      <div className="grid lg:grid-cols-4 grid-cols-2  gap-2 justify-center items-center  ">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card className="flex flex-row p-2 lg:p-3 items-end g-1 lg:g-3">
              <CardTitle className="icon p-2 lg:p-3 bg-blue-500 rounded-md">
                <Icon color="#fff " size={50} />
              </CardTitle>
              <CardContent className="">
                <CardDescription className="text-[9px] lg:text-[11px] font-extralight">
                  {stat.description}
                </CardDescription>
                <p className="text-center text-sm lg:text-xl">{stat.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  w-full   bg-slate-100 dark:bg-slate-900">
        {/* ATM CARD */}
        <Card className="overflow-hidden p-5 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-2xl shadow-xl  space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-sm uppercase tracking-widest text-gray-300">
              Wallet Card
            </h2>
            <span className="text-xs text-gray-400">Active</span>
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Top */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold tracking-wide">
                  {account.company}
                </h2>
                <p className="text-sm opacity-80 mt-1">{account.bank}</p>
              </div>

              <span className="text-sm font-bold tracking-widest">
                {account.currency}
              </span>
            </div>

            {/* Account Number */}
            <div>
              <p className="text-xs opacity-80 mb-1">Account Number</p>
              <div className="flex items-center gap-3">
                <p className="text-xl font-mono tracking-widest">
                  {account.accountNumber.replace(
                    /(\d{3})(\d{3})(\d{4})/,
                    "$1 $2 $3",
                  )}
                </p>

                <button
                  onClick={() => copy(account.accountNumber, "account")}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30"
                >
                  {copied === "account" ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-end text-xs">
              {/* User Code */}
              <div>
                <p className="opacity-80 mb-1">Deposits only </p>
              </div>

              <span className="opacity-70">Deposits only</span>
            </div>
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
      <div className="flex flex-col  ">
        <h2 className="text-lg font-semibold mb-4">Quick Services</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 lg:justify-center gap-4 items-center ">
          {services.map((ser, i) => {
            const Icon = ser.icon;
            return (
              <Card className="flex flex-col lg:p-4 p-2 gap-2 shadow-md justify-center items-center hover:underline ">
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
        <ScrollArea className=" lg:w-[80vw] p-2 md:w-[94vw] w-[92vw] overflow-hidden whitespace-nowrap rounded-2xl border">
          <Card className="">
            <CardContent className="p-0">
              <Table className="w-full text-sm">
                <TableHeader className="bg-gray-50 text-gray-600">
                  <TableRow>
                    <TableHead className="p-4 text-center">Service</TableHead>
                    <TableHead className="p-4 text-center">Phone</TableHead>
                    <TableHead className="p-4 text-center">Amount</TableHead>
                    <TableHead className="p-4 text-center">Status</TableHead>
                    <TableHead className="p-4 text-center">Date</TableHead>
                  </TableRow>
                </TableHeader>

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
              </Table>
              <ScrollBar orientation="horizontal" />
            </CardContent>
          </Card>
        </ScrollArea>
      </div>
    </div>
  );
}

export default UserDashboard;
