import React, { useState } from "react";


const Contador = () => {
    //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(0)

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1)
    }

    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        setCounter(counter - 1)
    }

    return (
        <>
            <div  className="contador" >
                <div onClick={handleClick2}>-</div>
                <div>{counter}</div>
                <div onClick={handleClick1}>+</div>
            </div>
        </>
    )
}

export default Contador