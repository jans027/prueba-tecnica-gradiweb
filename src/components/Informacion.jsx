import React, { useEffect, useState } from 'react'
import { productos } from '../functions/funciones'
import Contador from './Contador'

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
                            {
                                items.options.map((e) => (
                                    <div className='contenedorColorTalla'>
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