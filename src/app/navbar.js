import React from "react";
import {
    Alignment,
    Navbar
} from "@blueprintjs/core";

export default function CustomNavbar() {
    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>SSHS Ticketing</Navbar.Heading>
            </Navbar.Group>
        </Navbar>
    );
}
