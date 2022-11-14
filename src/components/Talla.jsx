import React, { useEffect, useState } from "react";
import { options } from "../functions/funciones";

function Talla() {


    const [element, setElement] = useState(null)


    useEffect(() => {
        options(setElement)
    }, [])

    return (
        <div>
            {/* {
                element.map((e) => (
                    <div className="contenedorTalla">
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

export default Talla;