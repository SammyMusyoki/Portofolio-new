"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Logo from "./Logo";
import Link from "next/link";
import BreadCrumbComponent from "./BreadCrumb.component";

const Navbar = () => {
  const { setTheme } = useTheme()

  return (
    <>
      <div className="flex justify-between sticky bg-opacity-10 items-center border-border border  p-4 rounded-xl shadow">
        <div className="flex">
          <Logo />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="border px-2 py-1 rounded">
              <Link href="/" className="text-xs">
                Home
              </Link>
            </div>
            <div className="border px-2 py-1 rounded">
              <Link href="/blog" className="text-xs">
                Blog
              </Link>
            </div>
          </div>
        </div>
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
      <BreadCrumbComponent />
    </>
  );
}

export default Navbar
