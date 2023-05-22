// import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";
import { Bell, LogInIcon, Mail, ShoppingBagIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
  const { setTheme } = useTheme();
  // const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {sessionData ? (
        <div className="flex items-center space-x-4">
          {/*right */}
          <Button
            onClick={() => setTheme("light")}
            variant="ghost"
            className=" hidden rounded-full p-2 md:inline-block"
          >
            <ShoppingBagIcon />
          </Button>
          <Button
            onClick={() => setTheme("dark")}
            variant="ghost"
            className=" hidden rounded-full p-2 md:inline-block"
          >
            <Bell />
          </Button>
          <Button
            variant="ghost"
            className=" hidden rounded-full p-2 md:inline-block"
          >
            <Mail />
          </Button>

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="p-0">
                <Avatar>
                  <AvatarImage
                    src={sessionData?.user.image || undefined}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </MenubarTrigger>
              <MenubarContent className="mt-2 rounded-none bg-background">
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={() => signOut()}>
                  Sign Out{" "}
                  <MenubarShortcut>
                    <LogInIcon size={16} />
                  </MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ) : (
        <Button onClick={() => signIn()}>Sing In</Button>
      )}
    </div>
  );
};

export default AuthShowcase;
