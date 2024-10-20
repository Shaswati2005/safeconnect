"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardDescription, CardHeader } from "./ui/card";

const Features = () => {
  return (
    <section className=" w-full h-full flex flex-1 flex-col gap-20 lg:gap-auto pt-35 padding-container ">
      <div className="w-full flex flex-row mx-7 justify-center">
        <h1 className="text-7xl font-bold text-violet-10 text-center ">
          Features
        </h1>
      </div>
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full "
      >
        <CarouselContent>
          <CarouselItem>
            <Card className="h-[400px] w-full bg-slate-400">
              <CardHeader>AI Chatbot for your childs specific needs</CardHeader>
              <CardDescription>
                Always there for you and your child whenever needed
              </CardDescription>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="h-[400px] w-full bg-slate-400">
              <CardHeader>AI Chatbot for your childs specific needs</CardHeader>
              <CardDescription>
                Always there for you and your child whenever needed
              </CardDescription>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="h-[400px] w-full bg-slate-400">
              <CardHeader>AI Chatbot for your childs specific needs</CardHeader>
              <CardDescription>
                Always there for you and your child whenever needed
              </CardDescription>
            </Card>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </section>
  );
};

export default Features;
