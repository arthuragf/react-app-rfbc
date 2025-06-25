import React, { useState } from "react"
import Button from "./Button"
const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => { setCount(count + 1) }
    const decrement = () => { setCount(count - 1) }
    const reset = () => { setCount(0) }

    const css_style = {
        counter_container: {
            textAlign: "center",
            fontFamily: "Arial, sans-serif"
        },
        count_display: {
            fontSize: "10em",
            marginTop: "0",
            marginBottom: "50px"
        }
    }

    return (
        <>
            <div style={css_style.counter_container}>
                <p style={css_style.count_display}>{count}</p>
                <Button buttonText="Decrement" backgroundColor="#25adff" onClick={decrement}/>
                <Button buttonText="Reset" backgroundColor="#25adff" onClick={reset}/>
                <Button buttonText="Increment" backgroundColor="#25adff" onClick={increment}/>
            </div>
        </>
    )
}
export default Counter
