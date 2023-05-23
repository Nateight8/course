import React from "react";
import { AspectRatio } from "./aspect-ratio";
import Image from "next/image";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useSession } from "next-auth/react";
import { P } from "./P";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

function ProfileLayout() {
  const { data: session } = useSession();
  return (
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

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when
                      you&lsquo;re done.
                    </DialogDescription>
                  </DialogHeader>

                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* content col */}
        <div className="col-span-full col-start-2 min-h-screen"></div>
      </div>
    </div>
  );
}

export default ProfileLayout;
