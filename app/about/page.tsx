"use client";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { ImageIcon } from "@radix-ui/react-icons";
export default function Page() {
  return (
    <>
      <article
        className=" gap-3 col-span-7 col-start-2 max-md:col-start-1 max-lg:col-span-12 md:mr-6 text-balance 
      "
      >
        <div>
          <section>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
              Introduction
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Hey theres! Welcome to my about page!
              <br />
              It takes a few minutes to read.
            </p>
          </section>
          <section>
            <h2
              id="whoiam"
              className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-6"
            >
              Who I Am
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-balance">
              My full name is Andri Hadiansah, and I entered this world on April
              27, 1998. Currently, I call Bandung, Indonesia, my home sweet
              home. I graduated with a bachelor's degree in Communication
              Science from UNIKOM Bandung in late 2021. Following my graduation,
              I got married.
            </p>
          </section>

          <section>
            <h3
              id="photos"
              className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              My Photos
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Here my some pictures
            </p>
          </section>
          <section>
            <h3
              id="progress"
              className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Progression
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              illum iure perspiciatis, voluptatum ullam cum vero nam rerum
              doloremque aperiam adipisci libero maiores earum ipsa tempora ex
              deleniti eum id!
            </p>
          </section>
          <section>
            <h3
              id="experience"
              className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Exp
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              illum iure perspiciatis, voluptatum ullam cum vero nam rerum
              doloremque aperiam adipisci libero maiores earum ipsa tempora ex
              deleniti eum id!
            </p>
          </section>
          <section>
            <h3
              id="skills"
              className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Skills
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              dolorum iste. Earum voluptatibus aliquam sunt reprehenderit
              laboriosam. Est architecto voluptatem aliquid ab minima, in
              reprehenderit, molestias, quod aliquam impedit officiis. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Et, nulla
              aliquam quam corporis tenetur temporibus saepe, odio accusantium
              quae doloremque similique, ducimus eos illo. Maxime minima
              molestias possimus aut veritatis.
            </p>
          </section>
          <section>
            <h3
              id="skills"
              className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Contact Me!
            </h3>
            <p id="contact" className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              dolorum iste. Earum voluptatibus aliquam sunt reprehenderit
              laboriosam. Est architecto voluptatem aliquid ab minima, in
              reprehenderit, molestias, quod aliquam impedit officiis. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Et, nulla
              aliquam quam corporis tenetur temporibus saepe, odio accusantium
              quae doloremque similique, ducimus eos illo. Maxime minima
              molestias possimus aut veritatis.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
