import {  getApiRecipe } from "../js/api.js";
import ItenRecipe from "../components/Recipe.js";


const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function sendRecipe() {
    const res  = await getApiRecipe(id)
    ItenRecipe(res)
}
sendRecipe()