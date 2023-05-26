import React from "react";
import Layout from "../ui/Layout";
import { H3 } from "../ui/H3";
import { P } from "../ui/P";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { api } from "~/utils/api";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MapPin } from "lucide-react";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { H4 } from "../ui/H4";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

function Professionals() {
  const getUsersWithProjects = api.design.getUsersWithProjects.useQuery();

  return (
    <section className="max-w-8xl mx-auto mt-6">
      <div className="min-h-screen">
        <Layout>
          <div className="">
            <H3 className="">Designers & Architects</H3>
            <P className="">
              Find interior designers & Architects for your project
            </P>
          </div>
          <div className="">
            <Button className="hidden sm:inline-block">
              Explore designers
            </Button>
          </div>
        </Layout>
        {/* push header role of mb */}
        <div className="h-8" />

        {getUsersWithProjects &&
          getUsersWithProjects.data?.map((user) => (
            <div
              key={user.id}
              className="max-w-8xl mx-auto my-6 flex items-center justify-center px-4 py-2 md:py-4 md:pl-4"
            >
              <div className="grid w-full  gap-2 sm:gap-4 lg:grid-cols-4 lg:gap-10">
                {/* user */}
                <div className="flex h-full items-center ">
                  <div className="w-full">
                    <div className="flex items-center space-x-3">
                      <Avatar className=" h-10 w-10 lg:h-20 lg:w-20">
                        <AvatarImage
                          src={user ? user.image || "" : ""}
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="">
                        <H4>{user.name}</H4>
                        <P className="sm:mb-3">{user.profession}</P>
                        <div className="hidden items-center space-x-1 lg:flex">
                          <MapPin size={12} className="" />{" "}
                          <P className="capitalize">{user.location}</P>
                        </div>
                      </div>
                    </div>
                    <Separator className="hidden lg:flex" />
                    <div className="hidden items-center space-x-4 lg:flex">
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
                </div>
                {/* designs */}
                <Swiper
                  freeMode={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 16,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 16,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 16,
                    },
                  }}
                  className="mySwiper  col-span-full col-start-2 mx-auto my-4 flex w-full"
                >
                  {user.designs.map((design) => (
                    <SwiperSlide key={design.id} className=" w-full">
                      <AspectRatio ratio={1 / 1}>
                        <Image
                          src={design.image}
                          alt=""
                          className="object-cover"
                          fill
                        />
                      </AspectRatio>
                      <div className="absolute inset-0  bg-[rgba(10,10,10,0.6)] " />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ))}
      </div>
      <div className="px-4">
        <Button className="w-full">Explore More Arch & Designers</Button>
      </div>
    </section>
  );
}

export default Professionals;
