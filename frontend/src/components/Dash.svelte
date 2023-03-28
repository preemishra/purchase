<script>
  import Card from "./Card.svelte";
  import Navbar from "./shared/Navbar.svelte";
  import {onMount} from 'svelte'
   import  Product from "../controllers/product"
  const productClass =new Product()
  

  let productList=[];
  let searchByName="";
  onMount(async()=> {
    let product= await productClass.allProduct()
    productList=await  product.data
    console.log(productList)
    })
     const searchValue=async ()=>{
      let result =await productClass.searchProduct(searchByName);
      console.log(await result)
      productList=result.data
     }
   
  let products = [
    { product_id: 1,
      product_name: "mobile",
      product1:
      "https://res.cloudinary.com/dgb9aajxo/image/upload/v1679739747/product_redmi12pro_ph4i4c.jpg",
      price: 10000,
    },
    { product_id: 2,
        product_name: "Orange",
        product1:
        "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg",
        price: 100,
      
    },
    {
        product_id: 3,
        product_name: "Grapes",
        product1:
        "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg",
      price: 150,
      
    },
    { product_id: 4,
      product_name: "mobile",
      product1:
      "https://res.cloudinary.com/dgb9aajxo/image/upload/v1679739747/product_redmi12pro_ph4i4c.jpg",
      price: 10000,
    },
    { product_id: 5,
        product_name: "Orange",
        product1:
        "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg",
        price: 100,
      
    },
    {
        product_id: 6,
        product_name: "Grapes",
        product1:
        "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg",
      price: 150,
      
    },
    { product_id: 1,
      product_name: "mobile",
      product1:
      "https://res.cloudinary.com/dgb9aajxo/image/upload/v1679739747/product_redmi12pro_ph4i4c.jpg",
      price: 10000,
    },
    { product_id: 2,
        product_name: "Orange",
        product1:
        "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg",
        price: 100,
      
    },
    {
        product_id: 3,
        product_name: "Grapes",
        product1:
        "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg",
      price: 150,
      
    },
    { product_id: 4,
      product_name: "mobile",
      product1:
      "https://res.cloudinary.com/dgb9aajxo/image/upload/v1679739747/product_redmi12pro_ph4i4c.jpg",
      price: 10000,
    },
    { product_id: 5,
        product_name: "Orange",
        product1:
        "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg",
        price: 100,
      
    },
    {
        product_id: 6,
        product_name: "Grapes",
        product1:
        "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg",
      price: 150,
      
    },
  ]
</script>

<main>
  <!-- <div>
    <Navbar />
  </div> -->
  <div class="container form-outline ">
    <input
      type="search"
      id="form1"
      class="form-control"
      placeholder="Search Product"
      aria-label="Search"
      bind:value={searchByName}
      on:keypress={(e) => {
        if (e.key === "Enter") {
          searchValue();
        }
      }}
    />
  </div>
  <div class="product-list">
        {#each productList as products}
        <Card product_id={products.product_id} product_name={products.product_name} picture={products.picture} price={products.price}/>
      {/each}
  </div>
</main>

<style>

.product-list {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
        margin-bottom: 5px;
	}
  
  .container {
    border: 1px solid rgb(253, 252, 252);
  }
 
</style>
