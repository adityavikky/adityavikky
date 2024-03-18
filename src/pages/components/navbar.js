import React from "react";
import { Navbar, Button } from "flowbite-react";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img
          src="/dribbble.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          AdityaVikky
        </span> */}
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Contact</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">UI/UX</Navbar.Link>
        <Navbar.Link href="#">Motion</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
