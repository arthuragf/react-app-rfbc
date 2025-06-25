import { useState } from "react"

const ColorPicker = () => {
    const [color, setColor] = useState('#DDD')
    const handleColorChange = (event) => {
        setColor(event.target.value)
    }
    return (
        <div>
           <h1>Color Picker</h1> 
           <div style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
           </div>
           <label>Select a Color:</label>
           <input type="color" value={color} onChange={handleColorChange}></input>
        </div>
    )
}
export default ColorPicker