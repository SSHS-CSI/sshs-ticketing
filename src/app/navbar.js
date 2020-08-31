import React from "react";
import {
    Alignment,
    Button,
    Navbar
} from "@blueprintjs/core";

export default function CustomNavbar() {
    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>SSHS Ticketing</Navbar.Heading>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                <Button minimal icon="log-in" text="Login" />
            </Navbar.Group>
        </Navbar>
    );
}
