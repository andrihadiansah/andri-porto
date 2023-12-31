"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";
export default function Hero() {
  const router = useRouter();
  return (
    <section
      id="hero"
      className="w-full max-w-[1440px] mx-3 grid grid-cols-12 gap-3 my-6"
    >
      <div className="  col-span-6 col-start-2 h-full w-full justify-center items-center flex max-md:col-span-12">
        <span className="text-4xl ">Front-End React Developer 👨‍💻</span>
      </div>
      {/* <div className="p-3 col-span-2  max-md:col-span-4 h-full items-center text-center flex">
          <div className=" w-full max-md:text-right">
            <div className="text-xl">good morning</div>
            <div className="text-xl">it's o'clock</div>
          </div>
        </div> */}
      <div className="p-3  col-span-4 max-md:col-span-12 row-span-3  items-center flex justify-center h-[400px] max-md:max-h-[200px]">
        <Image
          src="https://picsum.photos/1080/1080?mountain"
          alt="Picsum Image"
          loading="lazy"
          quality={100}
          priority={false}
          width={1080}
          height={1080}
          className=" flex justify-center  h-full 
            rounded-2xl object-cover 
            "
        />
      </div>
      <div className="p-3  col-span-6 col-start-2 max-md:col-span-12 h-full w-full grid gap-3 text-center">
        <h1 className="text-4xl">Hey yo!, i'm Andri Hadiansah</h1>
        <p className="text-xl">
          I'm passionate Front-End Developer, I enjoy to building this site and
          looking for opportunities.
        </p>
        <p className="text-xl">Based in Bandung, Indonesia</p>
      </div>
      <div className="p-3  col-span-6 col-start-2 max-md:col-span-12 grid grid-cols-subgrid items-center gap-3">
        <div className="col-span-2 max-md:col-span-12 text-center">
          Keep in touch:
        </div>
        <Button
          className="col-span-2 max-md:col-span-6"
          variant="secondary"
          type="button"
          onClick={() => router.push("/about")}
        >
          About Me
        </Button>
        <Button
          className="col-span-2 max-md:col-span-6"
          variant="secondary"
          type="button"
          onClick={() => router.push("/guestbook")}
        >
          Guest Book
        </Button>
      </div>
    </section>
  );
}
