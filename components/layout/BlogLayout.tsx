"use client";
import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export default function BlogLayout() {
  return (
    <>
      <div className="grid  col-span-8 max-md:col-span-12">
        <h2 className="text-2xl font-semibold tracking-tight">Latest Posts</h2>
      </div>
      <div className=" gap-3 col-span-4 max-md:order-[-1] max-md:col-span-12">
        <h2 className="text-2xl font-semibold tracking-tight">Top Posts</h2>
      </div>

      <div className="col-span-4 max-md:col-span-6">
        <Card className="">
          <CardHeader>
            <CardDescription className="flex justify-between">
              <span>date</span>
              <span>viewer</span>
            </CardDescription>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ut
              dicta voluptas itaque eligendi, odit quam eos debitis quae non
              sequi quidem, delectus dolores! Excepturi neque dolorem tenetur
              sit consequatur.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button size={"sm"} variant={"secondary"}>
              Read more
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="col-span-4 max-md:col-span-6 ">
        <Card className="">
          <CardHeader>
            <CardDescription className="flex justify-between">
              <span>date</span>
              <span>viewer</span>
            </CardDescription>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ut
              dicta voluptas itaque eligendi, odit quam eos debitis quae non
              sequi quidem, delectus dolores! Excepturi neque dolorem tenetur
              sit consequatur.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button size={"sm"} variant={"secondary"}>
              Read more
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="col-span-4  max-md:order-[-1] max-md:col-span-12">
        <Card className="bg-neutral-900 hover:bg-gradient-to-b from-transparent to-white/5">
          <CardHeader>
            <CardDescription className="flex justify-between">
              <span>date</span>
              <span>viewer</span>
            </CardDescription>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ut
              dicta voluptas itaque eligendi, odit quam eos debitis quae non
              sequi quidem, delectus dolores! Excepturi neque dolorem tenetur
              sit consequatur.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button size={"sm"} variant={"secondary"}>
              Read more
            </Button>
          </CardFooter>
        </Card>
      </div>
      <h2 className="col-span-12 text-2xl font-semibold tracking-tight">
        All Posts
      </h2>
      <div className="col-span-6 max-md:col-span-12  grid grid-cols-subgrid row-auto border p-2 rounded-lg ">
        <span className="max-md:col-span-2 text-xs text-muted-foreground flex flex-col">
          <span>date</span>
          <span>viewers</span>
        </span>
        <span className="max-md:col-span-8 col-span-4 flex items-center">
          title post
        </span>
        <Button
          size={"icon"}
          variant={"secondary"}
          className="w-full max-md:col-span-2 text-xs"
        >
          Read more
        </Button>
      </div>
      <div className="col-span-6 max-md:col-span-12  grid grid-cols-subgrid row-auto border p-2 rounded-lg ">
        <span className="max-md:col-span-2 text-xs text-muted-foreground flex flex-col">
          <span>date</span>
          <span>viewers</span>
        </span>
        <span className="max-md:col-span-8 col-span-4 flex items-center">
          title post
        </span>
        <Button
          size={"icon"}
          variant={"secondary"}
          className="w-full max-md:col-span-2 text-xs"
        >
          Read more
        </Button>
      </div>
    </>
  );
}
