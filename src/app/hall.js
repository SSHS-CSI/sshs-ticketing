import React from "react";

import { Button } from "@blueprintjs/core";

function Seat({ column = 0, row = 0, state="none", onClick }) {
    let title = `${String.fromCharCode(column + 65)}${row}`;
    let disabled, icon, text, intent;
    switch (state) {
    case "disabled":
        disabled = true;
        icon = "cross";
        text = undefined;
        intent = "none";
        break;
    case "taken":
        disabled = true;
        icon = "cross";
        text = undefined;
        intent = "primary";
        break;
    case "selected":
        disabled = false;
        icon = "tick";
        text = undefined;
        intent = "success";
        break;
    case "none":
        disabled = false;
        icon = undefined;
        text = title;
        intent = "none";
        break;
    }
    return (
        <td>
            <Button
                style={{ width: "100%" }}
                disabled={disabled}
                intent={intent}
                icon={icon}
                text={text}
                onClick={onClick} />
        </td>
    );
}

export default function Hall() {
    return (
        <div style={{ overflowX: "auto" }}>
            <table style={{ margin: "16px auto" }}>
                {Array.from(new Array(10).keys()).map(i => (
                    <tr>
                        {Array.from(new Array(7).keys()).map((j) => (
                            <Seat
                                column={i}
                                row={j}
                                state={(i + j) % 2 == 0 ? "disabled" : (i == 3 & j == 2) ? "taken" : (i == 4 && j == 1) ? "selected" : "none"}
                            />
                        ))}
                        <td style={{ width: 8 }} />
                        {Array.from(new Array(10).keys()).map((j) => (
                            <Seat column={i} row={j + 7} disabled={(i + j) % 2 == 1} />
                        ))}
                        <td style={{ width: 8 }} />
                        {Array.from(new Array(7).keys()).map((j) => (
                            <Seat column={i} row={j + 17} disabled={(i + j) % 2 == 1} />
                        ))}
                    </tr>
                ))}
            </table>
        </div>
    );
}
