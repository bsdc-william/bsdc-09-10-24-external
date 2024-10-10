"use client";

import { cn } from "~/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import useWindowDimensions from "~/lib/hooks/useWindowDimentions";

export default function NavigationMenu() {
  const { width } = useWindowDimensions();

  return (
    <div className="flex items-center justify-between p-[2rem]">
      <div className="flex items-center justify-center gap-2">
        <img
          src="/meta_logo.png"
          alt="Meta's Logo"
          className="mb-[2px] h-[13px] w-[18px] opacity-35"
        />
        <h1 className="text-lg">Meta</h1>
      </div>

      {width > 980 ? (
        <>
          <div className="flex items-center justify-center gap-3">
            <NavigationItem href="/">About Meta</NavigationItem>
            <NavigationItem href="/">Shop</NavigationItem>
            <NavigationItem href="/">Education</NavigationItem>
            <NavigationItem href="/">Connection</NavigationItem>
            <NavigationItem
              href="/"
              className="bg-blue-600/80 hover:bg-blue-600"
            >
              Get Started
            </NavigationItem>
          </div>
        </>
      ) : (
        <>
          <MobileDropdown />
        </>
      )}
    </div>
  );
}

type NavigationItemProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};
function NavigationItem({ href, children, className }: NavigationItemProps) {
  return (
    <a
      href={href}
      className={cn(
        "smooth_transition cursor-pointer rounded-md bg-neutral-950/15 px-3 py-2 text-sm hover:bg-neutral-950/30",
        className,
      )}
    >
      {children}
    </a>
  );
}

function MobileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-[2rem] border border-neutral-800 bg-neutral-950">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-neutral-800" />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
