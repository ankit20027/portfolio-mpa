import React from 'react';
import myLogo from '../../assets/tb.png';
import { Navbar, Text } from "@nextui-org/react";

function MyNavbar() {
  return (
    <div>
      <Navbar isBordered={true} variant={'floating'} maxWidth={'lg'}>
        <Navbar.Brand>
          <img src={myLogo} height={'80px'} alt="!dev"/>
          <Text b color={'inherit'} hideIn={'xs'}>
            !dev
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn={'xs'} enableCursorHighlight>
          <Navbar.Link isActive href='/'>Home</Navbar.Link>
          <Navbar.Link href='/projects'>Projects</Navbar.Link>
          <Navbar.Link href='#'>Blog</Navbar.Link>
          <Navbar.Link href='#'>Resume</Navbar.Link>
          <Navbar.Link href='#'>Contact Me</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </div>
  );
}

export default MyNavbar;