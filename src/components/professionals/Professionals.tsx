import React from "react";
import Layout from "../ui/Layout";
import { H3 } from "../ui/H3";
import { P } from "../ui/P";
import { Button } from "../ui/button";
import UserVerified from "./UserVerified";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

function Professionals() {
  return (
    <section className="mt-6">
      <Layout>
        <div className="">
          <H3 className="">Designers & Architects</H3>
          <P className="">
            Find interior designers & Architects for your project
          </P>
        </div>
        <div className="">
          <Button className="hidden sm:inline-block">
            Explore designers ideas
          </Button>
        </div>
      </Layout>
      {/* push header role of mb */}
      <div className="h-8" />

      {[1, 2, 3, 4].map((item) => (
        <Professional key={item} />
      ))}
      <Button className="w-full">Explore Arch & Designers</Button>
    </section>
  );
}

export default Professionals;

const Professional = () => {
  return (
    <div className="max-w-8xl mx-auto my-6 flex items-center justify-center px-4 py-2 md:py-4 md:pl-4">
      <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex h-full items-center ">
          <UserVerified />
        </div>
        <div className="col-span-full col-start-2 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className=" w-full">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="/images/1.jpg"
                  alt=""
                  className="object-cover"
                  fill
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
