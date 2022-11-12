import axios from "axios";





const productos = async (state) => {
    const peticion = await axios.get("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js");
    state(peticion.data)
}

const images = async (state) => {
    const peticion = await axios.get("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js");
    const data = peticion.data
    const {images} = data
    state(images)

}

const options = async (state) => {
    const peticion = await axios.get("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js");
    const data = peticion.data
    const {options} = data
    state(options)

}

export{
    productos,
    images,
    options
}






















