"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
// import WebReaderLogo from "/web-reader.png"
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Lexend, Lora } from "next/font/google";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Topics",
    href: "/topics",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
const lora = Lexend({
  weight: ["400", "500", "600", "700"]
})
function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-background" suppressHydrationWarning>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold"
        >
          <Image height={60} width={60} alt="web reader logo" src={"/images/web-reader.png"} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-5 ">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-primary ${lora.className} ${pathname === item.href
                ? "font-semibold text-[#42ADE9]"
                : "text-muted-foreground"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex gap-3">
          {/* <Button className={"bg-[#79da7c] px-5 py-2 h-auto"}>Login</Button> */}
          <Button variant="lightBlue" className={" px-5 py-2 h-auto"}>Sign Up</Button>
          <Separator orientation="vertical" />
          <Button className={"bg-[#42ADE9] px-5 py-2 h-auto"}>Login</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet suppressHydrationWarning>
          <SheetTrigger className="md:hidden">
            <Button
              className={'my-2'}
              variant="deepBlue"
              size="icon"

            >
              <Menu size={"lg"} className="" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-72 p-2 my-4 " suppressHydrationWarning>
            <div className="mt-8 flex flex-col gap-4" suppressHydrationWarning>

              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 transition hover:bg-muted ${pathname === item.href
                    ? "bg-muted font-semibold"
                    : ""
                    }`}>
                  {item.name}
                </Link>
              ))}

              <Button className={'p-2 h-auto'} variant="lightBlue">
                Login
              </Button>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}



export default Navbar;