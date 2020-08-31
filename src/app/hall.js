import React from "react";

import { Button } from "@blueprintjs/core";

function Seat({ column = 0, row = 0, disabled = false, taken = false }) {
    let title = `${String.fromCharCode(column + 65)}${row}`;
    return (
        <td>
            <Button
                style={{ width: "100%" }}
                disabled={disabled || taken}
                outlined={!taken}
                intent={taken ? "primary" : "none"}
                icon={taken ? "cross" : undefined}
                text={!taken ? title : undefined}
                onClick={() => alert(title)} />
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
                                disabled={(i + j) % 2 == 0}
                                taken={(i == 3 && j == 2)}
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
