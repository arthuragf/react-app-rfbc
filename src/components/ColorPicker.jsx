import { useState } from "react"

const ColorPicker = () => {
    const [color, setColor] = useState('#DDD')
    const handleColorChange = (event) => {
        setColor(event.target.value)
    }
    const colorPìckerContainerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif"
    }
    const titleStyle = {
        margin: "50px",
        fontSize: "3rem"
    }
    const colorDisplayStyle = {
        width: "300px",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "5px solid hsl(0, 0%, 80%)",
        borderRadius: "25px",
        marginBottom: "25px",
        transition: "0.25s ease",
        backgroundColor: color
    }
    const pStyle = {
        color: "hsl(0, 0%, 20%)",
        fontSize: "2rem",
        textAlign: "center"
    }

    const labelStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "10px"
    }

    const inputStyle = {
        width: "75px",
        height: "50px",
        padding: "5px",
        borderRadius: "10px",
        border: "3px solid hsl(0, 0%, 80%)",
    }

    return (
        <div style={colorPìckerContainerStyle}>
           <h1 style={titleStyle}>Color Picker</h1> 
           <div style={colorDisplayStyle}>
                <p style={pStyle}>Selected Color: {color}</p>
           </div>
           <label style={labelStyle}>Select a Color:</label>
           <input style={inputStyle} type="color" value={color} onChange={handleColorChange}></input>
        </div>
    )
}
export default ColorPicker