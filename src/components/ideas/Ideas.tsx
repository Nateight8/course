import React from "react";
import Layout from "../ui/Layout";
import { P } from "../ui/P";
import { H3 } from "../ui/H3";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { EyeIcon } from "lucide-react";

// type Props = {};

function Ideas() {
  const interiorIdeas = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "6",
    },
  ];

  return (
    <section className="mb-6">
      <Layout>
        <div className="">
          <H3 className="">Interior Design Ideas</H3>
          <P className="">Find interior design inspirations for your home</P>
        </div>
        <div className="">
          <Button className="hidden sm:inline-block">
            Explore designers ideas
          </Button>
        </div>
      </Layout>
      {/* push header role of mb */}
      <div className="h-8" />
      <div className="max-w-8xl mx-auto min-h-screen px-4 py-2 md:py-4 ">
        <div className="mb-4  grid  gap-4 md:grid-cols-2 lg:grid-cols-3">
          {interiorIdeas.map(({ id }) => (
            <div key={id} className="relative">
              <div className=" w-full">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src="/images/1.jpg"
                    alt=""
                    className="object-cover"
                    fill
                  />
                </AspectRatio>
              </div>
              <div className="absolute inset-0 flex items-end bg-[rgba(10,10,10,0.6)] p-2 ">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Avatar className="mr-2 h-6 w-6">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <P className="text-stone-300">@Username</P>
                  </div>
                  <div className="">
                    <div className=" flex items-center text-xs text-stone-300">
                      <EyeIcon size={16} className="mr-2" /> 3K
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full ">Explore More Design Ideas</Button>
      </div>
    </section>
  );
}

export default Ideas;
