import React, { useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

function SliderCx() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="absolute bottom-0 left-0 top-0 w-full">
      <div className="mx-auto max-w-7xl">
        <Swiper
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper w-full"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide key={item}>
              <AspectRatio ratio={2.5 / 1}>
                <Image
                  src="/images/2.jpg"
                  // alt={name || ""}
                  alt=""
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 flex items-center bg-[rgba(10,10,10,0.4)] p-4 md:p-12"></div>
              </AspectRatio>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* thumb swiper */}
        <div className="mx-auto flex w-full items-center justify-center">
          <Swiper
            modules={[FreeMode, Navigation, Thumbs]}
            freeMode={true}
            onSwiper={() => setThumbsSwiper}
            slidesPerView={6}
            watchSlidesProgress={true}
            spaceBetween={16}
            className="mySwiper  mx-auto my-4 flex w-full"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <SwiperSlide key={item}>
                <AspectRatio ratio={2.5 / 1}>
                  <Image
                    src="/images/2.jpg"
                    // alt={name || ""}
                    alt=""
                    className="object-cover"
                    fill
                  />
                  <div className="absolute inset-0 flex items-center bg-[rgba(10,10,10,0.7)] p-4 hover:cursor-pointer hover:bg-[rgba(10,10,10,0.5)] md:p-12"></div>
                </AspectRatio>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SliderCx;

function Tile() {
  return <div></div>;
}
