import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { transaction } from "@/lib/pricing";
import { Download, Eye } from "lucide-react";
import React from "react";

function UserHistory() {
  return (
    <Card className="p-3">
      <ScrollArea className="lg:w-[76vw] p-2 md:w-[94vw] w-[85vw] overflow-hidden whitespace-nowrap rounded-md border">
        <Table className="text-center">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">S/N</TableHead>
              <TableHead className="text-center">Reference Id</TableHead>
              <TableHead className="text-center">Type</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Description</TableHead>
              <TableHead className="text-center">Date/Time</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transaction?.length > 0
              ? transaction.map((trans, i) => {
                  return (
                    <TableRow>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{trans.reference}</TableCell>
                      <TableCell
                        className={` ${
                          trans.type === "debit"
                            ? "text-red-500 "
                            : "text-green-500"
                        } font-normal`}
                      >
                        {trans.type}
                      </TableCell>
                      <TableCell>₦{trans.amount}</TableCell>
                      <TableCell>
                        <Badge
                          className={` ${
                            trans.status === "failed"
                              ? "bg-orange-600"
                              : trans.status === "pending"
                              ? "bg-blue-600"
                              : "bg-green-500"
                          } font-normal`}
                        >
                          {trans.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{trans.description}</TableCell>
                      <TableCell>{trans.date$time}</TableCell>
                      <TableCell className="flex justify-center items-center gap-1">
                        <Button size="sm" className="bg-slate-400" type="icon">
                          <Eye />
                        </Button>
                        <Button className="bg-slate-400" size="sm" type="icon">
                          <Download />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Card>
  );
}

export default UserHistory;
