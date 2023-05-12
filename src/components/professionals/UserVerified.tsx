import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { P } from "../ui/P";
import { MapPin } from "lucide-react";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { H4 } from "../ui/H4";

// type Props = {};

function UserVerified() {
  return (
    <div className="w-full">
      <div className="flex items-center space-x-3">
        <Avatar className=" h-10 w-10 lg:h-20 lg:w-20">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="">
          <H4>Karim Benzema</H4>
          <P className="mb-3">Archetect & Building Desiner</P>
          <div className="flex items-center space-x-1">
            <MapPin size={12} className="" /> <P>Lagos Nigeria</P>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex items-center space-x-4">
        <Badge>4.5</Badge>
        <div className="">
          <P className="text-sm font-semibold">48</P>
          <P>Reviews</P>
        </div>
        <div className="">
          <P className="text-sm font-semibold">320</P>
          <P>Projects</P>
        </div>
      </div>
    </div>
  );
}

export default UserVerified;
