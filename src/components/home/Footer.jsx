import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Facebook, Instagram, TwitterIcon, X } from "lucide-react";

function HomeFooter() {
  return (
    <div className="flex lg:flex-row flex-col p-10 gap-2 bg-slate-400">
      <div className="col w-full lg:w-1/3 ">
        <h1 className="text-3xl m-5">Xtreme</h1>
        <p className="text-[16px] ">
          Subscribe to Xtreme youtube channel to watch more videos on website
          devleopment and press the bell icon to grt immediate notification of
          latest videos. Subscribe to Xtreme youtube channel to watch more
          videos on website devleopment and press the.
        </p>
      </div>

      <div className="col w-full lg:w-1/4 ">
        <h3 className="text-2xl m-5 font-medium">Office</h3>
        <p>ITFL Road</p>
        <p>Whitefield, Bangalore</p>
        <p>Karnataka, PIN 5560066, India</p>
        <p className="font-medium">adedejioluwafemi@outlook.com</p>
        <h4 className="font-medium">+234 - 9876543210</h4>
      </div>

      <div className="col w-full lg:w-1/5 ">
        <h3 className="text-2xl m-5 font-medium">Links</h3>
        <ul className="mx-2 flex flex-col gap-3 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>

      <div className="col w-full lg:w-1/3 ">
        <h3 className="text-2xl m-5 font-medium">Newsletter</h3>
        <form className="lg:p-3 p-0 flex gap-3 justify-center items-center">
          <Input placeholder="Enter Your Email Address" />
          <Button type="submit">Send</Button>
        </form>
        <div className=" m-3  flex gap-3">
          <Facebook />
          <Instagram />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
