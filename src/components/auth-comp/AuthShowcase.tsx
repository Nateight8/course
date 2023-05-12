// import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarSeparator,
//   MenubarTrigger,
// } from "../ui/menubar";
import { Button } from "../ui/button";

import { useTheme } from "next-themes";
import { LogInIcon } from "lucide-react";
const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
  // const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {sessionData ? (
        <Button
          variant="ghost"
          className="rounded-full p-2"
          onClick={() => signOut()}
        >
          <LogInIcon size={24} />
        </Button>
      ) : (
        <Button onClick={() => void signIn()}>Sing In</Button>
      )}
    </div>
  );
};

export default AuthShowcase;
