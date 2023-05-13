import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bell, Mail, ShoppingBagIcon } from "lucide-react";
import AuthShowcase from "../auth-comp/AuthShowcase";
import { Button, buttonVariants } from "../ui/button";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { H2 } from "../ui/H2";
import { H3 } from "../ui/H3";
import { AspectRatio } from "../ui/aspect-ratio";
import { H4 } from "../ui/H4";
import { P } from "../ui/P";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
const Navbar = () => {
  const linkItems = [
    {
      id: "1",
      label: "Design Ideas",
      href: "/",
    },
    {
      id: "2",
      label: "Designers & Architects",
      href: "/",
    },
    {
      id: "3",
      label: "Shopping",
      href: "/",
    },
  ];
  const { data: session } = useSession();
  const { setTheme } = useTheme();

  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep((e) => e + 1);
  };

  const handlePrev = () => {
    setStep((e) => e - 1);
  };
  return (
    <div className="bg-shadow  z-50 w-full bg-background shadow-sm">
      <nav className="max-w-8xl mx-auto flex items-center justify-between  px-4 py-2 md:py-4 ">
        <div className="">
          {/* left */}
          <ul className="hidden items-center space-x-4 lg:flex">
            {linkItems.map(({ id, label, href }) => (
              <li key={id}>
                <Link
                  className={buttonVariants({ variant: "link" })}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          {session && (
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
              {/* <div className="flex items-center"> */}

              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger asChild>
                    <Button asChild className="rounded-full p-0">
                      <Avatar>
                        <AvatarImage
                          src={session?.user.image || undefined}
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </Button>
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      <AuthShowcase />
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>

              {/* </div> */}
              {/* share a project */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button className=" hidden md:inline-block">
                    Share Project
                  </Button>
                </SheetTrigger>
                <SheetContent position="bottom" size="full">
                  <SheetHeader className="mx-auto mb-10 mt-6 w-full max-w-3xl">
                    <SheetTitle>
                      <H3 className="text-4xl">
                        Share what you've been working on?
                      </H3>
                    </SheetTitle>
                    <SheetDescription>
                      <>
                        {step === 1 && (
                          <P> Start By Giving This Project a Name</P>
                        )}
                      </>
                      <>
                        {step === 2 && (
                          <P> Start By Giving This Project a Name</P>
                        )}
                      </>
                    </SheetDescription>
                  </SheetHeader>
                  <>
                    {step === 3 && (
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="mx-auto mt-6 flex h-56 w-full max-w-3xl flex-col items-center justify-center rounded-sm border border-dashed border-border hover:cursor-pointer">
                          <H4 className="mb-2 capitalize">
                            Drag and drop an image or
                            <button
                              onClick={handlePrev}
                              className="px-2 font-bold text-blue-800"
                            >
                              Browse
                            </button>
                          </H4>

                          <P className="max-w-prose">
                            Minimum 1600px width recommended. Max 10MB each
                            (20MB for videos)
                          </P>
                        </div>
                        <div className="grid w-full max-w-3xl grid-cols-2 gap-4">
                          <Button
                            variant="outline"
                            onClick={handlePrev}
                            className="w-full"
                          >
                            Back
                          </Button>
                          <Button type="submit" className="w-full">
                            Next
                          </Button>
                        </div>
                      </div>
                    )}
                  </>

                  <>
                    {step === 1 && (
                      <div className="mx-auto mt-6 w-full max-w-3xl space-y-4 ">
                        <Input type="name" placeholder="Give me a name" />

                        <div className="grid w-full max-w-3xl grid-cols-2 gap-4">
                          <Button
                            variant="outline"
                            onClick={handlePrev}
                            className="w-full"
                            disabled
                          >
                            Back
                          </Button>
                          <Button onClick={handleNext} className="w-full">
                            Next
                          </Button>
                        </div>
                      </div>
                    )}
                  </>

                  <>
                    {step === 2 && (
                      <div className="mx-auto mt-6 w-full max-w-3xl space-y-4 ">
                        <Textarea placeholder="Write what went into this project or add details you will love to mention" />

                        <div className="grid w-full max-w-3xl grid-cols-2 gap-4">
                          <Button
                            variant="outline"
                            onClick={handlePrev}
                            className="w-full"
                          >
                            Back
                          </Button>
                          <Button onClick={handleNext} className="w-full">
                            Next
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                </SheetContent>
              </Sheet>
            </div>
          )}
          <div className="ml-4 hidden lg:inline-block "></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
