import {
  getProductFromDb,
  searchProductFromDb,
  getSingleProductFromDb,
} from "../services/product";
import { CartItemsStore } from "./store";

// get all products

class Product {
  async allProduct() {
    try {
      let productData = await getProductFromDb();
      return await productData;
    } catch (error) {
      console.log(error);
    }
  }

  async searchProduct(searchData) {
    try {
      let search = await searchProductFromDb(searchData);
      return await search;
    } catch (error) {}
  }

  async singleProductData(id) {
    try {
      let singleProduct = await getSingleProductFromDb(id);
      return await singleProduct;
    } catch (error) {
      console.log(error);
    }
  }
  async addToCartInLocal(cartData) {
    try {
      let totalCart = JSON.parse(localStorage.getItem("userCart")) || [];
      totalCart.push(await cartData);
      localStorage.setItem("userCart", JSON.stringify(totalCart));
    } catch (error) {
      console.log(error);
    }
  }
  

  async itemsInLocalCart() {
    let cartItems = 0;
    try {
      let totalCart =
        (await JSON.parse(localStorage.getItem("userCart"))) || [];
      cartItems = await totalCart;
      console.log(cartItems);
      return await cartItems;
    } catch (error) {
      console.log(error);
    }
  }
}

export default Product;
