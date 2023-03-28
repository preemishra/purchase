import Router from "svelte-spa-router";
import Cart from "../components/Cart.svelte";
import Login from "../components/Login.svelte";
import About from "../components/About.svelte";
import NotFound from "../components/NotFound.svelte";
import Dashboard from "../components/Dashboard.svelte";
import Dash from "../components/Dash.svelte";
import Search from "../components/Search.svelte";
import SingleProduct from "../components/singleProduct/SingleProduct.svelte"
export const routes = {
    "/" : Dash,
    "/about" : About,
    "/cart" : Cart,
    "/login/user" : Login,
    "/login/seller" : Login,
    "/search" : Search,
    "/product" : SingleProduct,
    "*" : NotFound
};