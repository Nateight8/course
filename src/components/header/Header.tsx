"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { ChevronUp, WalletIcon, ChevronDown } from "lucide-react";

import { Sling as Hamburger } from "hamburger-react";
import CreateProject from "./CreateProject";

type Props = {};

function Navbar({}: Props) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="sticky left-0 top-0 z-50 w-full bg-background ">
      <nav className="relative flex h-[8vh] items-center justify-between px-4">
        <div className=" uppercased text-base md:hidden"> VentureX</div>
        <ul className="hidden items-center space-x-8 md:flex  ">
          <li>
            <Button asChild className="w-full" variant="ghost">
              <Link href="/">Design Ideas</Link>
            </Button>
          </li>
          <li>
            <Button asChild className="w-full" variant="ghost">
              <Link href="/">Designers & Arch</Link>
            </Button>
          </li>
          <li>
            <Button asChild className="w-full" variant="ghost">
              <Link href="/">Shopping</Link>
            </Button>
          </li>
        </ul>
        <div className="hidden md:block">
          <Button className="w-full" variant="outline">
            Connect Wallet
          </Button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden">
          <Hamburger size={24} rounded onToggle={toggleOpen} />
        </div>
      </nav>
      <div className={`w-full, ${open ? "block" : "hidden"} md:hidden `}>
        <div className="my-2 h-px w-full bg-border" />
        <div className="flex min-h-[90vh]  flex-col justify-between py-4 ">
          <ul className="space-y-1">
            <li>
              <Button asChild className="w-full" variant="leftAlignBtn">
                <Link href="/">Design Ideas</Link>
              </Button>
            </li>
            <li>
              <Button asChild className="w-full" variant="leftAlignBtn">
                <Link href="/">Designers & Arch</Link>
              </Button>
            </li>

            <li>
              <Button asChild className="w-full" variant="leftAlignBtn">
                <Link href="/">Shopping</Link>
              </Button>
            </li>
          </ul>

          <div className="p-4">
            <CreateProject />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
