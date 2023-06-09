"use client";
import React from "react";
import { Collapse, IconButton } from "@material-tailwind/react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

function NavList() {
  const navlinks = [
    { id: "s", label: "Design Ideas" },
    { id: "a", label: "Designers" },
    { id: "c", label: "Architects" },
  ];
  return (
    <div className="">
      {navlinks.map((link) => (
        <Button size="sm" variant="ghost" key={link.id}>
          {link.label}
        </Button>
      ))}
    </div>
  );
}

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav className="fixed z-50 mx-auto w-full bg-background px-4 py-2">
      <div className="text-blue-gray-900 flex items-center justify-between">
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button onClick={() => signIn("google")} variant="ghost" size="sm">
            Sign In
          </Button>
          <Button onClick={() => signIn("google")} size="sm">
            Sign Up
          </Button>
        </div>
      </div>
      <Collapse className="h-screen" open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button onClick={() => signIn("google")} variant="ghost" size="sm">
            Sign In
          </Button>
          <Button onClick={() => signIn("google")} size="sm">
            Sign Up
          </Button>
        </div>
      </Collapse>
    </nav>
  );
}
