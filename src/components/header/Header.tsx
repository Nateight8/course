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
          <div className="ml-4 hidden lg:inline-block ">
            <AuthShowcase />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
