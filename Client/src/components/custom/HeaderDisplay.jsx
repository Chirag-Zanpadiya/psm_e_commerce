import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const HeaderDisplay = () => {
  const ImagesData = [
    "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
    "https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg",
    "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg",
    "https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg",
    "https://images.pexels.com/photos/3785868/pexels-photo-3785868.jpeg",
  ];
  return (
      <Carousel className="my-10 mx-auto w-[93vw] overflow-x-clip sm:overflow-visible">
        <CarouselContent>
          {ImagesData.map((image) => (
            <CarouselItem key={image}><img src={image} loading="lazy" className="object-cover w-full h-[60vh] rounded-3xl"/></CarouselItem>
          ))}
          \
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  );
};

export default HeaderDisplay;
