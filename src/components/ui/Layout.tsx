import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="max-w-8xl mx-auto flex items-center justify-between  px-4 py-2 md:py-4 ">
      {children}
    </div>
  );
}

export default Layout;
