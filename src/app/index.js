import React, { useState } from "react";

import Navbar from "./navbar";
import Hall from "./hall";
import Reserve from "./reserve";

export default function App() {
    let [selectedSeat, setSelectedSeat] = useState(null);
    let [takenSeats, setTakenSeats] = useState([]);

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

    function takeSeat(row, column) {
        setTakenSeats(takenSeats => [
            ...takenSeats,
            { row, column }
        ]);
        setSelectedSeat(null);
    }

    return (
        <>
            <Navbar />
            <Hall
                selectedSeat={selectedSeat}
                toggleSeat={toggleSeat}
                takenSeats={takenSeats} />
            <Reserve selectedSeat={selectedSeat} takeSeat={takeSeat} />
        </>
    );
}
