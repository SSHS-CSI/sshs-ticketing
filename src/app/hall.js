import React from "react";

import { Button } from "@blueprintjs/core";

function Seat({ column = 0, row = 0, disabled = false }) {
    let title = `${String.fromCharCode(column + 65)}${row}`;
    return (
        <td>
            <Button
                style={{ width: "100%" }}
                disabled={disabled}
                outlined
                text={title}
                onClick={() => alert(title)} />
        </td>
    );
}

export default function Hall() {
    return (
        <div style={{ overflowX: "auto" }}>
            <table>
                {Array.from(new Array(10).keys()).map(i => (
                    <tr>
                        {Array.from(new Array(7).keys()).map((j) => (
                            <Seat
                                column={i}
                                row={j}
                                disabled={(i == 2 && j == 3) || (i == 1 && j == 3) || (i == 3 && j == 3) || (i == 2 && j == 2) || (i == 2 && j == 4)}
                            />
                        ))}
                        <td style={{ width: 8 }} />
                        {Array.from(new Array(10).keys()).map((j) => (
                            <Seat column={i} row={j + 7} />
                        ))}
                        <td style={{ width: 8 }} />
                        {Array.from(new Array(7).keys()).map((j) => (
                            <Seat column={i} row={j + 17} />
                        ))}
                    </tr>
                ))}
            </table>
        </div>
    );
}
