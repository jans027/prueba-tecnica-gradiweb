import React, { useEffect, useState } from 'react'
import { productos } from '../functions/funciones'

const Informacion = () => {

    const [items, setItems] = useState(null)


    useEffect(() => {
        productos(setItems)
    }, [])
    return (
        <>
            {
                items !== null ? (
                    <div className='contenedorInformacion'>
                        <div>
                            <h3>{items.title}</h3>
                            <h3>
                                $ {items.price_min}
                                <span> $ {items.compare_at_price_max}</span>
                            </h3>
                        </div>

                        <div>
                            {
                                items.options.map((e) => 
                                    <div>
                                        <h6>{e.name}</h6>
                                        <div> {e.values} </div>
                                    </div>
                                )
                            }
                        </div>

                        <div>
                            <p>contador</p>
                            <p>suma</p>
                        </div>

                        <div>
                            <button>Add to favourite</button>
                            <button>Add to card</button>
                        </div>

                        <div>
                            <p>{items.description}</p>
                        </div>

                    </div>
                ) : ('No data')
            }
        </>
    )
}

export default Informacion