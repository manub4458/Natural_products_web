"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import Dropcontent from './Dropcontent';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
const DropdownMenus = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // const openMenu = () => {
  //   setIsOpen(true);
  // };

  // const closeMenu = () => {
  //   setIsOpen(false);
  // };
  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const handleMouseEnter = () => {
  //   setDropdownVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   setDropdownVisible(false);
  // };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Dropdown
      isOpen={isOpen}
     >
      <DropdownTrigger>
        <Button 
          variant="bordered" 
           onMouseEnter={() => {
              setIsOpen(true);
            }}
            onMouseLeave={() => {
              setIsOpen(false);
            }}
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </>
  );
};

export default DropdownMenus;
