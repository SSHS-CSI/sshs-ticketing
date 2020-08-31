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
    let [selectedSeat, setSelectedSeat] = useState(null);

    function toggleSeat(row, column) {
        if (selectedSeat != null && selectedSeat.row == row && selectedSeat.column == column) {
            setSelectedSeat(null);
        } else {
            setSelectedSeat({
                row,
                column
            });
        }
    }

    function seatState(row, column) {
        if ((row + column) % 2 == 0) {
            return "disabled";
        }
        if (selectedSeat == null || selectedSeat.row != row || selectedSeat.column != column) {
            return "none";
        }
        return "selected";
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
                                state={seatState(row, column)}
                                onClick={() => toggleSeat(row, column)}
                            />
                        ))}
                        <td style={{ width: 8 }} />
                        {Array.from(new Array(10).keys()).map(key => key + 7).map((column) => (
                            <Seat
                                column={column}
                                row={row}
                                state={seatState(row, column)}
                                onClick={() => toggleSeat(row, column)}
                            />
                        ))}
                        <td style={{ width: 8 }} />
                        {Array.from(new Array(7).keys()).map(key => key + 17).map((column) => (
                            <Seat
                                column={column}
                                row={row}
                                state={seatState(row, column)}
                                onClick={() => toggleSeat(row, column)}
                            />
                        ))}
                    </tr>
                ))}
            </table>
        </div>
    );
}
