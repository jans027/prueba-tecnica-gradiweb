import React, { useEffect, useState } from 'react'
import { productos } from '../functions/funciones'
import Spinner from 'react-bootstrap/Spinner';
import Carousel from 'react-bootstrap/Carousel';




const Home = () => {

    const [items, setItems] = useState(null)
    useEffect(() => {
        productos(setItems)
    }, [])
    // console.log(items)


    return (
        <>
            {
                items !== null ? (
                    <div className='contenedorPrincipal'>
                        <div className='contenedorCarousel'>
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
                                        src={items.images[1]}
                                        alt="Simagen2"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-200"
                                        src={items.images[2]}
                                        alt="imagen3"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-200"
                                        src={items.images[3]}
                                        alt="imagen4"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className='contenedorImagenes'>
                            <h5>
                                <span>Catalog / Sneakers / </span> {items.title}
                            </h5>
                            <div className='contenedorImgPrincipal'>
                                <img src={items.images[0]} alt="imagen1" />
                            </div>
                            <div className='contenedorMiniaturas'>
                                <img src={items.images[1]} alt="imagen2" />
                                <img src={items.images[2]} alt="imagen3" />
                                <img src={items.images[3]} alt="imagen4" />
                            </div>
                        </div>
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
                                <div className="contenedorColor">
                                    <h6 key={items.options[0].name}> {items.options[0].name} :</h6>
                                    <div>

                                        <div className='buttons1' key={items.options[0].name}> {items.options[0].values[0]}</div>
                                        <div className='buttons1' key={items.options[0].name}> {items.options[0].values[1]}</div>
                                    </div>
                                </div>
                                <div className="contenedorTalla">
                                    <h6 key={items.options[1].name}> {items.options[1].name} :</h6>
                                    <div>
                                        {/* {
                                            items.options[1].value.map((e) => (
                                                <div className='buttons1' key={items.options[0].name}> {items.options[0].values[0]}</div>
                                            ))
                                        } */}
                                        <div className='buttons1' key={items.options[0].name}> {items.options[1].values[0]}</div>
                                        <div className='buttons1' key={items.options[0].name}> {items.options[0].values[1]}</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                {/* <Contador /> */}
                            </div>

                            <div className='botonesCrud'>
                                <div>Add to favourite</div>
                                <div>Add to card</div>
                            </div>

                            <div className='contenedorDescripcion'>
                                <p>{items.description}</p>
                            </div>

                        </div>
                    </div>
                ) : (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )
            }
        </>
    )
}

export default Home