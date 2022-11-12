import React, { useEffect, useState } from "react";
// import { productos } from "../functions/funciones";


const Contador = () => {

    // const [items, setItems] = useState(null)

    // useEffect(() => {
    //     productos(setItems)
    // }, [])





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
        if (counter >= 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <div className="contador" >
                <div className="botonesContador">
                    <div onClick={handleClick2}>-</div>
                    <div>{counter}</div>
                    <div onClick={handleClick1}>+</div>
                </div>
                <div className="textoPrecio">
                    <div>Total price </div>
                    {/* <div>$ {items.price_min}</div> */}
                </div>
            </div>
        </>
    )
}

export default Contador