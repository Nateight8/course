import React from "react";
import Image from "next/image";
// import { H2 } from "~/components/ui/H2";
import Layout from "~/components/ui/Layout";
import { buttonVariants } from "~/components/ui/button";
import Link from "next/link";
import { Separator } from "~/components/ui/separator";
import { H3 } from "~/components/ui/H3";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { P } from "~/components/ui/P";
// import SliderCx from "~/components/designs/SliderCx";

// type Props = {}

function Design() {
  return (
    <div className="relative">
      <div className="relative h-[83vh] w-full">
        <Image src="/images/1.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(10,10,10,0.6)] p-4 md:p-12">
          <H3 className="text-stone-300">Dinning Room</H3>
        </div>
      </div>
      <Layout>
        <div className="flex w-full items-center justify-center">
          <Link href="#" className={buttonVariants({ variant: "link" })}>
            7 Design Shots
          </Link>
          <Link href="#" className={buttonVariants({ variant: "link" })}>
            27 Comments
          </Link>
          <Link href="#" className={buttonVariants({ variant: "link" })}>
            8 Shares
          </Link>
        </div>
      </Layout>
      <Separator />
      <div className="mx-auto  max-w-7xl">
        <div className="mb-12 mt-8">
          <H3 className="mb-4">Overview</H3>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            adipisci doloribus voluptatibus voluptate praesentium quasi et
            ducimus labore illum, facilis voluptatum cupiditate quis tempora rem
            mollitia obcaecati unde reiciendis fugit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam veniam doloribus animi iusto
            doloremque sed voluptatem explicabo ipsam, corrupti molestias
            dolorem officia illum! Exercitationem porro quisquam harum quibusdam
            expedita nostrum.
          </P>
        </div>
        <div className="">
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="w-full">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src="/images/2.jpg"
                    // alt={name || ""}
                    alt=""
                    className="object-cover"
                    fill
                  />
                  <div className="absolute inset-0 flex items-center bg-[rgba(10,10,10,0.4)] p-4 md:p-12"></div>
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <SliderCx/> */}
    </div>
  );
}

export default Design;
