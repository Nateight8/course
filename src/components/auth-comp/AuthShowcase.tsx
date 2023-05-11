import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";
import { Button } from "../ui/button";

import { useTheme } from "next-themes";
const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {sessionData ? (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>shadcn m@example.com</MenubarItem>
              <MenubarItem>
                {theme === "light" ? (
                  <button onClick={() => setTheme("dark")}> Dark Mode</button>
                ) : (
                  <button onClick={() => setTheme("light")}>Light Mode</button>
                )}
              </MenubarItem>
              <MenubarSeparator />

              <MenubarItem onClick={() => signOut()}>Sign Out</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      ) : (
        <Button onClick={() => void signIn()}>Sing In</Button>
      )}
    </div>
  );
};

export default AuthShowcase;
