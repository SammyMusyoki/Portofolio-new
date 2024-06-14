"use client"
import { Moon, Search, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Logo from "./Logo";
import Link from "next/link";
import BreadCrumbComponent from "./BreadCrumb.component";
import { useState } from "react";

const Navbar = () => {
  const { setTheme } = useTheme()


  return (
    <>
      <div className="flex justify-between relative bg-opacity-10 items-center border-border border  p-4 rounded-xl shadow">
        {/* Logo */}
        <div className="flex">
          <Logo />
        </div>
        <div>
          {/* NavLinks */}
          <div className="flex items-center gap-3">
            <div className="hover:text-primary">
              <Link href="/" className="text-sm">
                Home
              </Link>
            </div>
            <div className="hover:text-primary">
              <Link href="/blog" className="text-sm">
                Blog
              </Link>
            </div>
            <div className="hover:text-primary">
              <Link href="/about" className="text-sm">
                About
              </Link>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">

          {/* Theme Changer Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Todo: Search Dropdown Modal */}

      {/* Breadcrumb ... Home / blog / open-graph-images  */}
      <div className="flex justify-between items-center">
        <BreadCrumbComponent /> 
      </div>
    </>
  );
}

export default Navbar
