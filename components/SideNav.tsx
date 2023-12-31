import Link from "next/link";
import React from "react";

export default function SideNav() {
  return (
    <aside className="fixed w-2/12 pr-3">
      <div className="mb-4 border-b-2 pb-2">On this page</div>
      <div className="flex flex-col">
        <Link href={"#"}>top</Link>
        <Link href={"#intro"}>intro</Link>
        <Link href={"#progress"}>my progress</Link>
        <Link href={"#contact"}>contact</Link>
        <Link href={"#support"}>support me</Link>
      </div>
    </aside>
  );
}
