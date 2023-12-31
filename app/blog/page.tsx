import BlogLayout from "@/components/layout/BlogLayout";
import React from "react";

export default function Page() {
  return (
    <>
      <h1 className=" order-first col-span-12 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl mt-6 mb-3">
        Read my blog
      </h1>
      <BlogLayout />
    </>
  );
}
