import React from "react";

import { FormGroup, ControlGroup, InputGroup, Button } from "@blueprintjs/core";

export default function Reserve() {
    return (
        <FormGroup style={{ maxWidth: "80%", width: 640, margin: "auto" }} label="School ID" labelInfo="(required)">
            <ControlGroup fill>
                <InputGroup placeholder="18113" />
                <Button className="bp3-fixed" icon="arrow-right" />
            </ControlGroup>
        </FormGroup>
    );
}
