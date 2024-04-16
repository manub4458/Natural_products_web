"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const Drop = () => {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Products</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        
        <DropdownMenuSeparator />
       <Link href='/skincare'>
       <DropdownMenuCheckboxItem
    
    >
     Skincare
    </DropdownMenuCheckboxItem>
       </Link>
      
       <Link href='/haircare'>
       <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={(checked) => setShowPanel(checked)}
        >
          Haircare
        </DropdownMenuCheckboxItem>
       </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Drop;
