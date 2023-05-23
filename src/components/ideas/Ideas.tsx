import React from "react";
import Layout from "../ui/Layout";
import { P } from "../ui/P";
import { H3 } from "../ui/H3";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { EyeIcon } from "lucide-react";
import { api } from "~/utils/api";
import CreateProject from "../header/CreateProject";

function Ideas() {
  const interiorIdeas = api.design.getProjects.useQuery();

  // console.log(interiorIdeas);

  return (
    <section className="mb-6">
      <Layout>
        <div className="">
          <H3 className="">Interior Design Ideas</H3>
          <P className="">Find interior design inspirations for your home</P>
        </div>
        <div className="">
          <div className="hidden sm:inline-block">
            <CreateProject />
          </div>
        </div>
      </Layout>
      {/* push header role of mb */}
      <div className="h-8" />
      <div className="max-w-8xl mx-auto min-h-screen px-4 py-2 md:py-4 ">
        <div className="mb-4  grid  gap-4 md:grid-cols-2 lg:grid-cols-3">
          {interiorIdeas &&
            interiorIdeas.data?.map(({ id, image, name, user }) => {
              return (
                <div key={id} className="relative">
                  <div className=" w-full">
                    <AspectRatio ratio={1 / 1}>
                      <Image
                        src={image}
                        alt={name || ""}
                        className="object-cover"
                        fill
                      />
                    </AspectRatio>
                  </div>
                  <div className="absolute inset-0 flex items-end bg-[rgba(10,10,10,0.6)] p-4 ">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Avatar className="mr-2 h-8 w-8">
                          <AvatarImage
                            src={user ? user.image : undefined}
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
              );
            })}
        </div>
      </div>
      <Button className="w-full ">Explore More Design Ideas</Button>
    </section>
  );
}

export default Ideas;
