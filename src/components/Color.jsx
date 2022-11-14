import React, { useEffect, useReducer, useState } from "react";
import { options, productos } from "../functions/funciones";

function Color() {


    // const [element, setElement] = useState(null)

    // useEffect(() => {
    //     options(setElement)
    // }, [])

    // const [items, setItems] = useState(null)

    // useEffect(() => {
    //     productos(setItems)
    // }, [])




    // console.log(items.options[0])

    return (
        <div>
            {/* {
                items.map((e) => (
                    <div className="contenedorColor">
                        <h6 key={e.name}> {e.name} </h6>
                        <div>
                            {
                                e.values.map((item) =>
                                    <div className='buttons1' key={item}> {item}</div>
                                )
                            }
                        </div>
                    </div>
                )
                )
            } */}
        </div>

    );
}

export default Color;