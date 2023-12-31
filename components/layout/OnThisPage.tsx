import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { ImageIcon } from "@radix-ui/react-icons";
export default function OnThisPage() {
  return (
    <aside className="col-span-3 gap-3  max-lg:hidden  ">
      <div className="sticky top-[76px] h-[calc(90vh-128px)] ">
        <div className=" p-3 font-semibold border-b">On this page</div>
        <ScrollArea className="p-3 h-[calc(65vh-64px)] flex ">
          <div>
            <Link href={"#whoiam"}>Who I Am</Link>
          </div>
          <div>
            <Link href={"#photos"} className="flex items-baseline gap-2 w">
              Some My Photos <ImageIcon />
            </Link>
          </div>
          <div>
            <Link href={"#progress"}>My Progress</Link>
          </div>
          <div>
            <Link href={"#experience"}>Work Experience</Link>
          </div>
          <div>
            <Link href={"#skills"}>What I Using</Link>
          </div>
          <div>
            <Link href={"#contact"}>Contact Me!</Link>
          </div>
        </ScrollArea>
        <div className="border-t p-3">
          <Link href={"#"}>Scroll to top</Link>
          <p></p>
        </div>
      </div>
    </aside>
  );
}
