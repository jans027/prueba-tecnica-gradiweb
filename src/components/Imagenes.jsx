import React, { useEffect, useState } from 'react'
import { images } from '../functions/funciones'
import CarouselImages from './CarouselImages'

const Imagenes = () => {

    const [imagenes, setImagenes] = useState(null)


    useEffect(() => {
        images(setImagenes)
    }, [])

    // console.log(imagenes)

    return (
        <>
        <CarouselImages />
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