// import { FunctionComponent } from "react";

import AuthShowcase from "../auth-comp/AuthShowcase";

const Navbar = () => {
  return (
    <div className="">
      <nav className="max-w-8xl mx-auto flex items-center justify-between p-4">
        <div className="">{/* left */}</div>
        <div className="">
          {/*right */}
          <AuthShowcase />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
