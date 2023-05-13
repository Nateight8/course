import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSession } from "next-auth/react";

import { Button } from "../ui/button";
import EditProfile from "./EditProfile";
import { P } from "../ui/P";

function AuthUser() {
  const { data: session } = useSession();
  return (
    <>
      {" "}
      <div className="">
        {/* profile banner */}
        <div className="w-full">
          <AspectRatio ratio={8 / 1}>
            <Image src="/images/1.jpg" alt="" className="object-cover" fill />
          </AspectRatio>
        </div>
        {/* contents */}
        <div className="max-w-8xl mx-auto grid grid-cols-5 gap-4 px-4 py-2 md:py-4">
          {/* profile col */}
          <div className="relative">
            {/* profile */}
            <div className="absolute -top-24 left-0 right-0 h-[60vh] bg-stone-300 p-4 shadow-lg shadow-stone-900/20">
              <div className="mb-4 flex items-center space-x-3">
                <Avatar>
                  <AvatarImage
                    src={session?.user.image || undefined}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <P className="capitalize">{session?.user.name}</P>
              </div>
              <div className="grid grid-cols-2 gap-3 ">
                <Button variant="outline" size="sm">
                  Edit profile
                </Button>
                <EditProfile />
              </div>
            </div>
          </div>

          {/* content col */}
          <div className="col-span-full col-start-2 grid min-h-screen grid-cols-4 gap-4">
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
    </>
  );
}

export default AuthUser;
