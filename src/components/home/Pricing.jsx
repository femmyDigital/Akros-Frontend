import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { price } from "@/lib/pricing";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

function renderRows(data) {
  return data.map((p, i) => {
    const [value, details] = Object.entries(p)[0];
    const [amount, duration] = details.split("-");

    return (
      <TableRow key={i} className="hover:bg-white/5 transition-colors">
        <TableCell className="font-medium">{i + 1}</TableCell>

        <TableCell>{value}</TableCell>

        <TableCell className="text-blue-500 font-semibold">{amount}</TableCell>

        <TableCell className="text-gray-400">{duration}</TableCell>
      </TableRow>
    );
  });
}

function HomePricing() {
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Data Bundle Pricing</h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Browse available network data bundles. Prices may change depending
            on network provider updates.
          </p>

          <p className="mt-4 text-blue-500 font-medium">
            Note: Prices are not fixed
          </p>
        </div>

        {/* PRICING CARD */}

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <Tabs defaultValue="mtn">
            {/* NETWORK TABS */}

            <TabsList className="grid grid-cols-4 bg-black border border-white/10 rounded-xl mb-8">
              <TabsTrigger value="mtn">MTN</TabsTrigger>

              <TabsTrigger value="airtel">Airtel</TabsTrigger>

              <TabsTrigger value="glo">GLO</TabsTrigger>

              <TabsTrigger value="etisalat">9Mobile</TabsTrigger>
            </TabsList>

            {/* MTN */}

            <TabsContent value="mtn">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">S/N</TableHead>

                    <TableHead>Data Value</TableHead>

                    <TableHead>Price</TableHead>

                    <TableHead>Validity</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>{renderRows(price.mtn)}</TableBody>
              </Table>
            </TabsContent>

            {/* AIRTEL */}

            <TabsContent value="airtel">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">S/N</TableHead>

                    <TableHead>Data Value</TableHead>

                    <TableHead>Price</TableHead>

                    <TableHead>Validity</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>{renderRows(price.airtel)}</TableBody>
              </Table>
            </TabsContent>

            {/* GLO */}

            <TabsContent value="glo">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">S/N</TableHead>

                    <TableHead>Data Value</TableHead>

                    <TableHead>Price</TableHead>

                    <TableHead>Validity</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>{renderRows(price.glo)}</TableBody>
              </Table>
            </TabsContent>

            {/* 9MOBILE */}

            <TabsContent value="etisalat">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">S/N</TableHead>

                    <TableHead>Data Value</TableHead>

                    <TableHead>Price</TableHead>

                    <TableHead>Validity</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>{renderRows(price.etisalat)}</TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default HomePricing;
