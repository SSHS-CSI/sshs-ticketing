import React, { useState } from "react";

import { FormGroup, ControlGroup, InputGroup, Button } from "@blueprintjs/core";

export default function Reserve() {
    let [state, setState] = useState("none");
    let intent, loading, icon;
    switch (state) {
    case "none":
        intent = "none";
        loading = false;
        icon = "arrow-right";
        break;
    case "loading":
        intent = "none";
        loading = true;
        icon = undefined;
        break;
    case "succeeded":
        intent = "success";
        loading = false;
        icon = "tick";
        break;
    case "failed":
        intent = "danger";
        loading = false;
        icon = "error";
        break;
    }

    function toggleState() {
        setState(state => {
            switch (state) {
            case "none":
                setTimeout(() => setState("succeeded"), 1000);
                return "loading";
            case "loading":
                return "loading";
            case "succeeded":
                return "none";
            case "failed":
                return "none";
            }
            return state;
        });
    }

    return (
        <FormGroup style={{ maxWidth: "80%", width: 640, margin: "auto" }} label="Ticketing Information">
            <ControlGroup fill>
                <InputGroup placeholder="School ID" />
                <InputGroup placeholder="Keycode" />
                <Button
                    className="bp3-fixed"
                    intent={intent}
                    icon={icon}
                    loading={loading}
                    onClick={() => toggleState()} />
            </ControlGroup>
        </FormGroup>
    );
}
