<script>
import  Product from "../controllers/product"
import { CartItemsStore ,getSingleProductStore} from '../controllers/store';
  const productClass =new Product()
     export let picture ;
     export let product_id;
     export  let product_name ;
     export let price ;

     let CartItems;
   const AddItemInCart=async()=>{
    let cart={product_id,picture,product_name,price}
    CartItems=await productClass.addToCartInLocal(cart)
    let totalData=await productClass.itemsInLocalCart()
    increment( totalData);
   }

   let increment=async (CartItems)=> {
   CartItemsStore.set(await CartItems);
}
  //  export const handleCartOnClick=async()=>{
  //   let product=(await itemsInLocalCart())
  //    cartItem=await product.lengths
  //   }
    
    export const getSingleProduct=async ()=>{
      let result =await productClass. singleProductData(product_id);
      console.log(await result)
       getSingleProductStore.set(await result.data);
     }

</script>
<div >
  <div class="card">
    <a href="#/product"><div class="image" style="background-image: url({picture})" on:click={getSingleProduct}></div></a>
<h4>{product_name}</h4>
<p>₹{price}</p>
<button on:click|preventDefault={AddItemInCart}>Add to cart</button>
</div>
</div>

<style>
    .image {
		height: 150px;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
    .card{
       text-align: center;
       margin-bottom: 10px;
       margin-top: 10px;
    }
</style>