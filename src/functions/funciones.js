import axios from "axios";





const productos = async (state) => {
    const peticion = await axios.get("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js");
    state(peticion.data)
}


export{
    productos,
}






















