import { getProductFromDb ,searchProductFromDb,getSingleProductFromDb} from "../services/product"
import { CartItemsStore } from './store';

// get all products

export const allProduct=async ()=>{
   let productData= await getProductFromDb();
   return await productData
}
export const searchProduct=async (searchData)=>{
    let search= await searchProductFromDb(searchData);
    return await search
 }
 export const singleProductData=async (id)=>{
   let singleProduct= await getSingleProductFromDb(id);
   console.log(singleProduct)
   return await singleProduct
}
 export const addToCartInLocal=async (cartData)=>{
  let totalCart = JSON.parse(localStorage.getItem("userCart"))|| []
  totalCart.push(await cartData,)
   localStorage.setItem('userCart', JSON.stringify(totalCart));
}

let cartItems=0;
export const itemsInLocalCart=async ()=>{
   let totalCart = await JSON.parse(localStorage.getItem("userCart"))|| []
   cartItems=await totalCart;
   console.log(cartItems)
   return await cartItems
 }

//  let increment=async (CartItems)=> {
//    CartItemsStore.update(await CartItems);
// }
