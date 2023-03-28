
<script>
    import { createEventDispatcher } from "svelte";
  import { allProduct } from "../controllers/product";
    const dispatch = createEventDispatcher();
    var email = "";
    var password = "";
    const submitButton = (email, password) => {
      dispatch("message", { email: email, password: password });
    };
  </script>
  
  <div
    class="container1"
    style="width: 30%; margin-top: 5%; margin-left: 33.33%;"
  >
    <form>
      <h1>Login</h1>
      <!-- Email input -->
      <div class="form-outline">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="form-label"
          >Email address <span class="text-danger">*</span> :</label
        >
        <input
          type="email"
          placeholder="Email Address"
          title="Enter a unique and valid email id"
          class="form-control"
          bind:value={email}
          required
        />
      </div>
  
      <!-- Password input -->
      <div class="form-outline">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="form-label"
          >Password <span class="text-danger">*</span> :</label
        >
        <input
          type="password"
          title="Enter a valid password"
          placeholder="Password"
          class="form-control"
          bind:value={password}
          required
        />
      </div>
  
      <!-- Submit button -->
      <button
        type="button"
        class="btn btn-primary btn-block btn-myStyle"
        on:click|preventDefault={async()=>{
        console.log(await allProduct())
        }}>LOGIN</button
      >
    </form>
  </div>
  
  <style>
    h1 {
      text-align: center;
      font-size: 25px;
      font-weight: bold;
      color: #566787;
      font-family: "Varela Round", sans-serif;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .form-label {
      font-size: 14px;
      color: #566787;
      font-weight: bold;
      font-family: "Varela Round", sans-serif;
    }
  
    span {
      color: red;
    }
    .btn {
      background-color: #299be4;
    }
    .btn-myStyle {
      font-family: "Varela Round", sans-serif;
      background-color: #299be4;
    }
    .btn-myStyle:hover {
      background-color: #566787;
    }
  </style>
  