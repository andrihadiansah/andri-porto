"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rock_Salt as FontSans } from "next/font/google";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon, MoonIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
  preload: true,
});

export default function Header() {
  const pathname = usePathname();
  const navpath = pathname.split("/")[1];
  return (
    <header
      className="fixed z-40
      flex w-full
      justify-center items-center
      h-[64px] bg-slate-500/10 backdrop-blur-md
      "
    >
      <nav className="flex w-full max-w-[1440px] items-center justify-between mx-6 ">
        <Link href={"/"}>
          <button className="items-center text-2xl">
            <span
              className={cn(
                "tracking-tighter font-sans antialiased ",
                fontSans.variable
              )}
            >
              &ri
            </span>
            <span className="">.porto</span>
          </button>
        </Link>
        {/* //* Top Right Nav */}
        {/* //! Mobile must be hidden, only toggle theme avail*/}
        <div className="flex items-center gap-3">
          <div className="flex gap-3 text-lg items-center">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`link${navpath ? "" : ""} md:hidden h-[64px]`}
              >
                <Button variant={"link"}>
                  {navpath || <HamburgerMenuIcon />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>other pages:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/" className="w-full">
                    home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about" className="w-full">
                    about
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/guestbook" className="w-full">
                    guestbook
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/blog" className="w-full">
                    blog
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about" className="max-md:hidden">
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="hover:text-red-600"
              >
                about
              </motion.div>
            </Link>
            <Separator
              orientation="vertical"
              className="py-3 bg-yellow-600 max-md:hidden"
            />
            <Link href="/guestbook" className="max-md:hidden">
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="hover:text-green-600"
              >
                guestbook
              </motion.div>
            </Link>
            <Separator
              orientation="vertical"
              className="pt-6 bg-cyan-600 max-md:hidden"
            />
            <Link href="/blog" className="max-md:hidden">
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="hover:text-blue-600"
              >
                blog
              </motion.div>
            </Link>
          </div>
          <Separator orientation="vertical" className="py-3 bg-yellow-600 " />
          <div className="">
            <MoonIcon />
          </div>
        </div>
      </nav>
    </header>
  );
}
