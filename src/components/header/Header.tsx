// import { FunctionComponent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bell, Mail, ShoppingBagIcon } from "lucide-react";
import AuthShowcase from "../auth-comp/AuthShowcase";
import { Button, buttonVariants } from "../ui/button";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
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
  return (
    <div className="bg-shadow sticky left-0 right-0 top-0  z-50 w-full bg-background shadow-sm">
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

              <Avatar>
                <AvatarImage
                  src={session?.user.image || undefined}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              {/* </div> */}
            </div>
          )}
          <div className="ml-4 hidden lg:inline-block ">
            <AuthShowcase />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
