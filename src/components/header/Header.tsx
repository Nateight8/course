import AuthShowcase from "../auth-comp/AuthShowcase";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import CreateProject from "./CreateProject";
const linkItems = [
  {
    id: "1",
    label: "Home",
    href: "/",
  },
  {
    id: "2",
    label: "Design Ideas",
    href: "/",
  },
  {
    id: "3",
    label: "Designers & Architects",
    href: "/",
  },
  {
    id: "4",
    label: "Shopping",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <div className="bg-shadow sticky top-0 z-50 w-full bg-background shadow-sm">
      <nav className="max-w-8xl mx-auto  px-4 py-2 ">
        <div className="flex w-full  items-center justify-between  ">
          <div className="hidden lg:inline-block">
            <ul className=" items-center space-x-4 lg:flex">
              {" "}
              {linkItems.map(({ id, label, href }) => (
                <li key={id}>
                  <Link
                    className={buttonVariants({ variant: "link" })}
                    href={href}
                  >
                    {label}
                  </Link>{" "}
                </li>
              ))}
            </ul>
          </div>
          <MobileMenu />
          <AuthShowcase />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent position="left" size="xl">
        <div className="flex h-full flex-col items-center justify-between">
          <div className="w-full">
            {/* left */}
            <ul className="flex flex-col  space-y-2">
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
          <div className="w-full">
            <CreateProject />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
