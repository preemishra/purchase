<script>
  import {itemsInLocalCart} from "../../controllers/product"
  import {onMount} from 'svelte'
  import { CartItemsStore } from '../../controllers/store';
  const logo="https://res.cloudinary.com/dgb9aajxo/image/upload/v1679737882/logo_ffaqcn.png";


  let cartItem;
  CartItemsStore.subscribe(value => {
		cartItem = value.length;
    console.log(cartItem)
	});
  
  onMount(async()=> {
    let product=(await itemsInLocalCart())
     cartItem=product
     increment(cartItem);
    })

    let increment=async (cartItems)=> {
   CartItemsStore.set(await cartItems);
}

  export const navData=async (id)=>{
   let singleProduct= await getSingleProductFromDb(id);
   console.log(singleProduct)
   return await singleProduct
}
</script>
<main>
 <nav class="navbar navbar-inverse">
   <div class="container-fluid">
     <div class="navbar-header">
       <img class="navbar-brand" src={logo} alt="EMART">
     </div>
     <!-- <ul class="nav navbar-nav" /> -->
     <ul class="nav navbar-nav navbar-right">
       <li class="active"><a href="#/">Home</a></li>
       <li class="active"><a href="#/about">About</a></li>
       <li class="active">
         <slot><a href="#/cart"
           ><span class="glyphicon glyphicon-shopping-cart "/>Cart <span class="cartQty">{cartItem}</span></a
         ></slot>
       </li>
       <li class="dropdown">
         <a class="dropdown-toggle" data-toggle="dropdown" href="#/login"
           ><span class="glyphicon glyphicon-log-in" /> Login<span
             class="caret"
           /></a
         >
         <ul class="dropdown-menu">
           <li><a href="#/login/user">Login as User</a></li>
           <li><a href="#/login/seller">Login as Seller</a></li>
         </ul>
       </li>
     </ul>
   </div>
 </nav>
</main>
<style>
nav ul {
   margin-left: auto;
}
 nav .container-fluid{
   display: flex;
   /* justify-content: end; */
   align-items: center;
 }
 nav {
   padding: 20px;
   background-color: #0C0C0C;
   position: sticky;
   top: 0;
 }
 nav li a{
   padding: 0 20px;
 }
 main {
   text-align: center;
   max-width: 240px;
   margin: 0 auto;
 }
 .navbar-brand{
   padding: 0 20px;
   width: 100px;
   height: auto;
 }
 /* .navbar {
   background-color: #0C0C0C;
   margin: -16px;
 } */
 @media (min-width: 640px) {
   main {
     max-width: none;
   }
 }

 .cartQty{
  position: absolute;
    left: 61px;
    top: -12px;
    text-align: center;
    border-radius: 7px;
    width: 18px;
    height: 18px;
    background-color: #ff6161;
    border: 1px solid #fff;
    font-weight: 400;
    color: #f0f0f0;
    line-height: 16px;
    font-size: 12px;
 }
</style>