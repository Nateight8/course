import Image from "next/image";
import React, { useState } from "react";
import { P } from "../ui/P";
import { H2 } from "../ui/H2";
import { Button } from "../ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// type Props = {};

function Featured() {
  const design = {
    id: "123",
    title: "Builder Model Coper Ridge Brunfels.",
    description: "hello word",
    userId: "256",
  };

  // const [liked, setLiked] = useState(false);

  // const handleLiked = () => {
  //   setLiked(!liked);
  // };

  return (
    <div className="relative flex h-[83vh] items-center justify-center bg-primary">
      <Image
        src="/images/1.jpg"
        alt="Photo by Drew Beamer"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center bg-[rgba(10,10,10,0.6)] p-4 md:p-12">
        <div className="">
          <P className="  font-semibold text-stone-300">
            Interior Design <br /> Project of the Day
          </P>
          <div className="my-10 max-w-sm">
            <H2 className="text-stone-200">{design.title}</H2>
          </div>
          <div className="flex items-center space-x-10">
            <Button size="sm">Open Project</Button>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="">
                <P className="mb-1 text-slate-200">by Shadcn</P>
                <div className="item-center flex space-x-1">
                  <P className="text-slate-200">Lagos, Nigeria</P>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
