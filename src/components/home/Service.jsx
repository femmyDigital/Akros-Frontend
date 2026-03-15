import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Wifi } from "lucide-react";

function HomeService() {
  return (
    <>
      <div className="lg:p-12 p-1">
        <h1 className="text-4xl text-center font-medium from-neutral-700 mb-7">
          Our Services
        </h1>
        <p className=" text-center w-[80%] lg:w-[60%] my-4 mx-auto  font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          optio at delectus eius odio obcaecati perferendis labore nam, eos sunt
          neque
        </p>
        <div className=" flex flex-col  lg:flex-row justify-between gap-5 m-8 items-center">
          <Card className="p-3 w-full lg:w-1/3">
            <Wifi size={70} className="my-0 mx-auto" />
            <CardTitle className="text-2xl font-medium text-center m-2">
              Data Plans
            </CardTitle>
            <CardContent className="text-center text-wrap">
              Buy Your Data Bundles at a Reasonable and Affordable Price Per
              Unit, Buy Your Data Bundles at a Reasonable and Affordable Price
            </CardContent>
          </Card>

          <Card className="p-3 w-full lg:w-1/3">
            <Wifi size={70} className="my-0 mx-auto" />
            <CardTitle className="text-2xl font-medium text-center m-2">
              Data Plans
            </CardTitle>
            <CardContent className="text-center text-wrap">
              Recharge Airtime VTU directly to Mobile Numbers and get Instant.
              Value at Discounted rates and Affordable Price
            </CardContent>
          </Card>

          <Card className="p-3 w-full lg:w-1/3">
            <Wifi size={70} className="my-0 mx-auto" />
            <CardTitle className="text-2xl font-medium text-center m-2">
              Data Plans
            </CardTitle>
            <CardContent className="text-center text-wrap">
              oTV, DsTV, StarTimes, Smile, Spectranet, Electricity Bills and
              much more, Buy Your Data Bundles at a Reasonable and
            </CardContent>
          </Card>
        </div>

        <div className=" flex flex-col  lg:flex-row justify-between gap-5 m-8 items-center">
          <Card className="p-3 w-full lg:w-1/3">
            <Wifi size={70} className="my-0 mx-auto" />
            <CardTitle className="text-2xl font-medium text-center m-2">
              Data Plans
            </CardTitle>
            <CardContent className="text-center text-wrap">
              Buy Your Data Bundles at a Reasonable and Affordable Price Per
              Unit, Buy Your Data Bundles at a Reasonable and Affordable Price
            </CardContent>
          </Card>

          <Card className="p-3 w-full lg:w-1/3">
            <Wifi size={70} className="my-0 mx-auto" />
            <CardTitle className="text-2xl font-medium text-center m-2">
              Data Plans
            </CardTitle>
            <CardContent className="text-center text-wrap">
              Recharge Airtime VTU directly to Mobile Numbers and get Instant.
              Value at Discounted rates and Affordable Price
            </CardContent>
          </Card>

          <Card className="p-3 w-full lg:w-1/3">
            <Wifi size={70} className="my-0 mx-auto" />
            <CardTitle className="text-2xl font-medium text-center m-2">
              Data Plans
            </CardTitle>
            <CardContent className="text-center text-wrap">
              oTV, DsTV, StarTimes, Smile, Spectranet, Electricity Bills and
              much more, Buy Your Data Bundles at a Reasonable and
            </CardContent>
          </Card>
        </div>
      </div>
      <hr />
    </>
  );
}

export default HomeService;
