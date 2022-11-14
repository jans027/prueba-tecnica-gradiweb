import React, { useEffect, useState } from 'react'
import { images } from '../functions/funciones'
import Carousel from 'react-bootstrap/Carousel';
import { productos } from "../functions/funciones";



const Imagenes = () => {

    // const [imagenes, setImagenes] = useState(null)


    // useEffect(() => {
    //     images(setImagenes)
    // }, [])
    // const { images } = useParams();

    // const productos = items

    // console.log(imagenes)

    // const [items, setItems] = useState(null)

    // useEffect(() => {
    //     productos(setItems)
    // }, [])

    // console.log(items)

    return (
        <>
            {/* <div className='contenedorCarousel'>
                <Carousel slide={false}>

                    <Carousel.Item>
                        <img
                            className="d-block w-200"
                            src={items.images[0]}
                            alt="imagen1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-200"
                            src={items.images[0]}
                            alt="Simagen2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-200"
                            src={items.images[0]}
                            alt="imagen3"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-200"
                            src={items.images[0]}
                            alt="imagen4"
                        />
                    </Carousel.Item>
                </Carousel>
            </div> */}
            {/* {
                items !== null ? (

                    <div className='contenedorImagenes'>
                        <h5>
                            <span>Catalog / Sneakers / </span> {items.title}
                        </h5>
                        <div className='contenedorImgPrincipal'>
                            <img src={items.images[0]} alt="imagen1" />
                        </div>
                        <div className='contenedorMiniaturas'>
                            <img src={items.images[0]} alt="imagen2" />
                            <img src={items.images[0]} alt="imagen3" />
                            <img src={items.images[0]} alt="imagen4" />
                        </div>
                    </div>

                ) : ('No datos')
            } */}
        </>
    )
}

export default Imagenes