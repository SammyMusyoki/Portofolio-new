"use client"
import { Moon, Search, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Logo from "./Logo";
import Link from "next/link";
import BreadCrumbComponent from "./BreadCrumb.component";
import { useState } from "react";
import SearchModal from "./Modals/SearchModal";

const Navbar = () => {
  const { setTheme } = useTheme()
  const [openModal, isOpenModal] = useState<boolean>(false);


  return (
    <>
      <header className="flex justify-between relative bg-opacity-10 items-center border-border border  p-4 rounded-xl shadow">
        {/* Logo */}
        <div className="flex">
          <Logo />
        </div>
        <div>
          {/* NavLinks */}
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 ">
              <Link href="/" className="text-xs">
                Home
              </Link>
            </div>
            <div className="px-2 py-1 ">
              <Link href="/blog" className="text-xs">
                Blog
              </Link>
            </div>
            <div className="px-2 py-1 ">
              <Link href="/about" className="text-xs">
                About
              </Link>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          {/* Search Button */}
          <Button
            onClick={() => isOpenModal(true)}
            variant="outline"
            size="icon"
          >
            <Search size="14" />
          </Button>
          {openModal && (
            <div className='absolute top-20 left-0 z-50 border bg-background p-2 bg-opacity-50 rounded-md w-full'>
                <SearchModal isOpenModal={isOpenModal}/>
            </div>
          )}

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
      </header>

      {/* Todo: Search Dropdown Modal */}

      {/* Breadcrumb ... Home / blog / open-graph-images  */}
      <BreadCrumbComponent />
    </>
  );
}

export default Navbar
