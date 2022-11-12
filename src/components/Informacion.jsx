import React, { useEffect, useState } from 'react'
import { productos } from '../functions/funciones'
import Color from './Color'
import ColorTalla from './Color'
import Contador from './Contador'
import Talla from './Talla'

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
                        <div className='ContenedorTitulo'>
                            <h6>by Nike x ALIX</h6>
                            <h1>{items.title}</h1>
                            <h3>
                                $ {items.price_min}
                                <span> $ {items.compare_at_price_max}</span>
                            </h3>
                        </div>

                        <div>
                            <Color/>
                            <Talla/>
                        </div>

                        <div>
                            <Contador/>
                        </div>

                        <div className='botonesCrud'>
                            <div>Add to favourite</div>
                            <div>Add to card</div>
                        </div>

                        <div className='contenedorDescripcion'>
                            <p>{items.description}</p>
                        </div>

                    </div>
                ) : ('No data')
            }
        </>
    )
}

export default Informacion