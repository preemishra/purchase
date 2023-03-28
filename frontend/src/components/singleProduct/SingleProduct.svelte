<script>
  import '../singleProduct/singleProduct.css'
  import { getSingleProductStore} from '../../controllers/store';


      let picture ;
      let product_id;
      let product_name ;
      let price ;
      let descriptions;
      let product_qty

    let productList=[];
    let searchByName="";
    const searchValue=async ()=>{
      let result =await  singleProdut();
      console.log(await result)
      productList=result.data
     
     }

     let cartItem;
     getSingleProductStore.subscribe(value => {
		cartItem = value
    picture=value.picture
    console.log(picture)
	});

  let apple ="https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg"
  function changeImage(element) {
var main_prodcut_image = document.getElementById('main_product_image');
main_prodcut_image.src = element.src;
}
</script>

<div class="container mt-5 mb-5">
  <div class="card">
      <div class="row g-0">
          <div class="col-md-6 border-end">
              <div class="d-flex flex-column justify-content-center">
                  <div class="main_image"> <img src={cartItem.picture} id="main_product_image" width="350">
                  </div>
                  <div class="thumbnail_images">
                      <ul id="thumbnail">
                        <li><img  on:click|preventDefault={changeImage} src={apple} width="70"></li>
                        <li><img onclick="changeImage(this)" src={apple} width="70"></li>
                        <li><img onclick="changeImage(this)" src={cartItem.picture} width="70"></li>
                        <li><img onclick="changeImage(this)" src={cartItem.picture} width="70"></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="col-md-6">
              <div class="p-3 right-side">
                  <div class="d-flex justify-content-between align-items-center">
                      <h3>{cartItem.product_name}</h3> <span class="heart"><i class='bx bx-heart'></i></span>
                  </div>
                  <div class="mt-2 pr-3 content">
                    {cartItem.descriptions}
                  </div>
                  <h3>{cartItem.price}</h3>
                  <!-- <div class="ratings d-flex flex-row align-items-center">
                      <div class="d-flex flex-row"> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i>
                          <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bx-star' ></i> </div>
                      <span>441 reviews</span>
                  </div> -->
                  <!-- <div class="mt-5"> <span class="fw-bold">Color</span>
                      <div class="colors">
                          <ul id="marker">
                              <li id="marker-1"></li>
                              <li id="marker-2"></li>
                              <li id="marker-3"></li>
                              <li id="marker-4"></li>
                              <li id="marker-5"></li>
                          </ul>
                      </div>
                  </div> -->
                  <div class="buttons d-flex flex-row mt-5 gap-3">
                      <button class="btn btn-outline-dark">Buy Now</button>
                      <button class="btn btn-dark">Add to Basket</button> </div>
                  <!-- <div class="search-option"> <i class='bx bx-search-alt-2 first-search'></i>
                      <div class="inputs"> <input type="text" name=""> </div> <i class='bx bx-share-alt share'></i>
                  </div> -->
              </div>
          </div>
      </div>
  </div>
</div>
