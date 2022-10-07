import { getStoreCart } from "../utilities/fakedb";

export const productsAndCartLoader = async() =>{
    // get products
    const productsData = await fetch ('products.json');
    const products = await productsData.json();

    // get cart
    const savedcart = getStoreCart();
    const initialCart = [];
    for(const id in savedcart){
        const addedProduct = products.find(product => product.id===id);
        if(addedProduct){
            const quantity = savedcart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }


    return {products:products, initialCart:initialCart};
}