import React, { useEffect, useState } from "react";
import { options } from "../functions/funciones";

function Color() {


    const [element, setElement] = useState(null)


    useEffect(() => {
        options(setElement)
    }, [])

    return (
        <div>
            {
                element.map((e) => (
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
            }
        </div>

    );
}

export default Color;