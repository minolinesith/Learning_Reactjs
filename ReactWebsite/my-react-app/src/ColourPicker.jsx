import { useState } from 'react';

function ColourPicker() {

    const [colour, setColour] = useState("FFFFFF");

    function handleColourChange(e) {

        setColour(e.target.value);

    }


    return (<div className="colour-picker-container">
        <h1>Color Picker</h1>
        <div className="colour-display" style={{ backgroundColor: colour }}>
            <p>Selected Color: {colour}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={colour} onChange={handleColourChange} />




    </div>);
}

export default ColourPicker;