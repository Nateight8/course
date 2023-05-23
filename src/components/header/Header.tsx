import AuthShowcase from "../auth-comp/AuthShowcase";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

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

  return (
    <div className="bg-shadow sticky top-0 z-50 w-full bg-background shadow-sm">
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
