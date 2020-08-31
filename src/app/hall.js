import React, { useState } from "react";

import { Button } from "@blueprintjs/core";

function Seat({ column = 0, row = 0, state="none", onClick }) {
    let title = `${String.fromCharCode(row + 65)}${column + 1}`;
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
    let [seatStates, setSeatStates] = useState(
        Array.from(new Array(10).keys())
            .map(row => Array.from(new Array(24).keys())
                 .map(column => {
                     if ((row + column) % 2 == 0) {
                         return "disabled";
                     } else {
                         return "none";
                     }
                 }))
    );
    function toggleSeatState(row, column) {
        setSeatStates(seatStates => {
            let state = seatStates[row][column];
            if (state == "disabled" || state == "taken") {
                return seatStates;
            }
            let newState;
            switch (state) {
            case "selected":
                newState = "none";
                break;
            case "none":
                newState = "selected";
                break;
            }
            return [
                ...seatStates.slice(0, row),
                [...seatStates[row].slice(0, column), newState, ...seatStates[row].slice(column + 1)],
                ...seatStates.slice(row + 1)
            ];
        });
    }
    return (
        <div style={{ overflowX: "auto" }}>
            <table style={{ margin: "16px auto" }}>
                {Array.from(new Array(10).keys()).map(row => (
                    <tr>
                        {Array.from(new Array(7).keys()).map((column) => (
                            <Seat
                                column={column}
                                row={row}
                                state={seatStates[row][column]}
                                onClick={() => toggleSeatState(row, column)}
                            />
                        ))}
                        <td style={{ width: 8 }} />
                        {Array.from(new Array(10).keys()).map(key => key + 7).map((column) => (
                            <Seat
                                column={column}
                                row={row}
                                state={seatStates[row][column]}
                                onClick={() => toggleSeatState(row, column)}
                            />
                        ))}
                        <td style={{ width: 8 }} />
                        {Array.from(new Array(7).keys()).map(key => key + 17).map((column) => (
                            <Seat
                                column={column}
                                row={row}
                                state={seatStates[row][column]}
                                onClick={() => toggleSeatState(row, column)}
                            />
                        ))}
                    </tr>
                ))}
            </table>
        </div>
    );
}
