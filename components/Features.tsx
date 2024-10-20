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
              <CardHeader className="text-xl lg:text-4xl font-semibold text-skin-10">A comprehensive platform promoting children’s online safety, mental health, and digital wellbeing</CardHeader>
              <CardDescription className="text-sm lg:text-2xl font-normal text-skin-10 ">
                Always there for you and your child whenever needed
              </CardDescription>
            </Card>
            </CarouselItem>

            <CarouselItem className="h-[200px] lg:h-[400px] flex items-center justify-center">


            <Card className="h-full  w-full max-w-[800px] bg-blue-500 py-3 lg:py-7 px-8 lg:px-12 flex items-center justify-center">
              <CardHeader className="text-xl lg:text-4xl font-semibold text-skin-10">AI-powered emotional check-ins.
              </CardHeader>
              <CardDescription className="text-sm lg:text-2xl font-normal text-skin-10 ">
              Parental insights into emotional trends.

              </CardDescription>
            </Card>
            </CarouselItem>

            <CarouselItem className="h-[200px] lg:h-[400px] flex items-center justify-center">


            <Card className=" h-full  w-full max-w-[800px] bg-blue-500 py-3 lg:py-7 px-8 lg:px-12 ">
              <CardHeader className="text-xl lg:text-4xl font-semibold text-skin-10">Real-time detection of harmful content.</CardHeader>
              <CardDescription className="text-sm lg:text-2xl font-normal text-skin-10 ">
              Safe content recommendations for a positive digital experience.

              </CardDescription>
            </Card>
            </CarouselItem>


            <CarouselItem className="h-[200px]  lg:h-[400px] flex items-center justify-center">



            <Card className=" h-full  w-full max-w-[800px] bg-blue-500 py-3 lg:py-7 px-8 lg:px-12 ">
              <CardHeader className="text-xl lg:text-4xl font-semibold text-skin-10">Digital Wellbeing Dashboard:
              </CardHeader>
              <CardDescription className="text-sm lg:text-2xl font-normal text-skin-10 ">
              Insights for parents on emotional and online behavior trends
              </CardDescription>
            </Card>
            </CarouselItem>

            <CarouselItem className="h-[200px]  lg:h-[400px] flex items-center justify-center">



            <Card className="h-full  w-full max-w-[800px] bg-blue-500 py-3 lg:py-7 px-8 lg:px-12 ">
              <CardHeader className="text-xl lg:text-4xl font-semibold text-skin-10">Mindful Notifications & Alerts:</CardHeader>
              <CardDescription className="text-sm lg:text-2xl font-normal text-skin-10 ">
              Smart notifications tailored to emotional states
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
