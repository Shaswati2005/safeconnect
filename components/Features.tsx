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
    <section className=" w-screen  h-screen flex flex-1 flex-col gap-20 lg:gap-auto pt-35 padding-container ">
      <div className="w-full flex flex-row mx-7 justify-center">
        <h1 className="text-7xl font-bold text-violet-10 text-center ">
          Features
        </h1>
      </div>
      <Carousel
        opts={{ align: "center", loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full flex items-center justify-center"
      >
        <CarouselContent >
          <CarouselItem className="h-[200px]  lg:h-[400px] flex items-center justify-center">
            <Card className=" h-full  w-full max-w-[800px]  bg-blue-500 py-3 lg:py-7 px-8 lg:px-12 ">
              <CardHeader className="text-xl lg:text-4xl font-semibold text-skin-10">AI Chatbot for your childs specific needs</CardHeader>
              <CardDescription className="text-sm lg:text-2xl font-normal text-skin-10 ">
                Always there for you and your child whenever needed
              </CardDescription>
            </Card>
            </CarouselItem>

            <CarouselItem className="h-[200px] lg:h-[400px] flex items-center justify-center">


            <Card className="h-full  w-full max-w-[800px] bg-blue-500 py-3 lg:py-7 px-8 lg:px-12 flex items-center justify-center">
              <CardHeader className="text-xl lg:text-4xl font-semibold text-skin-10">AI Chatbot for your childs specific needs</CardHeader>
              <CardDescription className="text-sm lg:text-2xl font-normal text-skin-10 ">
                Always there for you and your child whenever needed
              </CardDescription>
            </Card>
            </CarouselItem>

            <CarouselItem className="h-[200px] lg:h-[400px] flex items-center justify-center">


            <Card className=" h-full  w-full max-w-[800px] bg-blue-500 py-3 lg:py-7 px-8 lg:px-12 ">
              <CardHeader className="text-xl lg:text-4xl font-semibold text-skin-10">AI Chatbot for your childs specific needs</CardHeader>
              <CardDescription className="text-sm lg:text-2xl font-normal text-skin-10 ">
                Always there for you and your child whenever needed
              </CardDescription>
            </Card>
            </CarouselItem>


            <CarouselItem className="h-[200px]  lg:h-[400px] flex items-center justify-center">



            <Card className=" h-full  w-full max-w-[800px] bg-blue-500 py-3 lg:py-7 px-8 lg:px-12 ">
              <CardHeader className="text-xl lg:text-4xl font-semibold text-skin-10">AI Chatbot for your childs specific needs</CardHeader>
              <CardDescription className="text-sm lg:text-2xl font-normal text-skin-10 ">
                Always there for you and your child whenever needed
              </CardDescription>
            </Card>
            </CarouselItem>

            <CarouselItem className="h-[200px]  lg:h-[400px] flex items-center justify-center">



            <Card className="h-full  w-full max-w-[800px] bg-blue-500 py-3 lg:py-7 px-8 lg:px-12 ">
              <CardHeader className="text-xl lg:text-4xl font-semibold text-skin-10">AI Chatbot for your childs specific needs</CardHeader>
              <CardDescription className="text-sm lg:text-2xl font-normal text-skin-10 ">
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
