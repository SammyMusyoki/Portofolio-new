"use client"

import React, { useState } from "react";
import { Slash } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent,
} from "./ui/dropdown-menu";


const BreadCrumbComponent = () => {
    const pathname = usePathname();
    const pathSegments = pathname?.split("/").filter((segment) => segment !== "");
    const [showDropdown, setShowDropdown] = useState<boolean>(false);


    const renderDropDownItems = () => {
        const dropdownItems = pathSegments?.slice(3, -1).map((segment, index) => (
            <DropdownMenuItem key={`${segment} - ${index}`}>
                <BreadcrumbLink href={`/${pathSegments.slice(0, index + 4).join("/")}`} >
                    {segment}
                </BreadcrumbLink>
            </DropdownMenuItem>
        ));
        return dropdownItems
    }

    const breadcrumbItems = pathSegments?.map((segment, index) => (
        <React.Fragment key={`${segment} - ${index}`}>
            {index === 2 ? (
                pathSegments.length > 3 ? (
                <BreadcrumbItem>
                    <DropdownMenu open={showDropdown} onOpenChange={setShowDropdown}>
                        <DropdownMenuTrigger asChild>
                            <BreadcrumbEllipsis>...</BreadcrumbEllipsis>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>{renderDropDownItems()}</DropdownMenuContent>
                    </DropdownMenu>
                </BreadcrumbItem>
                ) : null
            ) : index < pathSegments.length - 1 ? (
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
                        {segment}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ) :  (
                <BreadcrumbItem>
                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                </BreadcrumbItem>
            )}
            {index !== pathSegments.length - 1 && <BreadcrumbSeparator><Slash /></BreadcrumbSeparator>}
        </React.Fragment>
    ));

    return (
      <div className="my-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            {breadcrumbItems}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    );
}

export default BreadCrumbComponent;