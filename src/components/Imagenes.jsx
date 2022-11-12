import React, { useEffect, useState } from 'react'
import { images, productos } from '../functions/funciones'

const Imagenes = () => {

    const [imagenes, setImagenes] = useState(null)
    // const [items, setItems] = useState(null)


    useEffect(() => {
        images(setImagenes)
        // productos(setItems)
    }, [])

    // console.log(imagenes)

    return (
        <>
            {
                imagenes !== null ? (

                    <div className='contenedorImagenes'>
                        <h5>
                            {/* <span>Catalog / Sneakers / </span> {items.title} */}
                        </h5>
                        <div className='contenedorImgPrincipal'>
                            <img src={imagenes[0]} alt="imagen1" />
                        </div>
                        <div className='contenedorMiniaturas'>
                            <img src={imagenes[2]} alt="imagen2" />
                            <img src={imagenes[3]} alt="imagen2" />
                            <img src={imagenes[1]} alt="imagen2" />
                        </div>
                    </div>

                ) : ('No datos')
            }
        </>
    )
}

export default Imagenes