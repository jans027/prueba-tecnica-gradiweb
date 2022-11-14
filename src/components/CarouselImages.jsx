import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { images } from '../functions/funciones';

const CarouselImages = () => {

    const [imagenes, setImagenes] = useState(null)


    useEffect(() => {
        images(setImagenes)
    }, [])

    // console.log(imagenes)



    return (
        <div className='contenedorCarousel'>
            <Carousel slide={false}>
                
                <Carousel.Item>
                    <img
                        className="d-block w-200"
                        src={imagenes[0]}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-200"
                        src={imagenes[1]}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-200"
                        src={imagenes[2]}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-200"
                        src={imagenes[3]}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselImages