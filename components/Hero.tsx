import React from "react";
import Button from "./Button";
import Navbar from "./navbar";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="w-screen h-screen padding-container px-5 lg:px-20 flex flex-1 flex-col gap-20 xl:gap-30 py-10  lg:py-18">
        <div className="w-full flex flexBetween flex-row">
          <div className=" w-full  h-[75%]  md:-right-28 xl:-top-60">
            <h1 className=" pt-20 text-blue-500 lg:max-[510px] text-6xl capitalize font-semibold">
              make a safe childhood with{" "}
            </h1>
            <h1 className="text-violet-10 text-9xl lg:max-[510px]:capitalize font-bold">
              {" "}
              safe connect
            </h1>
          </div>
          <Image
            src={"/homeill1.png"}
            alt="illustration"
            width={500}
            height={500}
          />
        </div>

        <Link
          href={"/authorize"}
          className="w-full animate-pulse transition-all flex flex-1 flex-col py-10 lg:py-20 lg:flex-row gap-15 lg:gap-20"
        >
          <Button
            type="button"
            title="enter safeconnect"
            variant="btn_violet"
          />
        </Link>
      </section>
    </>
  );
};

export default Hero;
//defult
