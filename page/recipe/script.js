import {  getApiRecipe,fakeApiUnicRecipes,baseURL } from "../js/api.js";
import ItenRecipe from "../components/Recipe.js";


const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'))

async function sendRecipe() {
    fetch(`${baseURL}/api`)
    .then(async (res)=>{ 
        if (res.ok) {
            const res  = await getApiRecipe(id)
            ItenRecipe(res)
        }
    })
    .catch( async ()=>{
        const res  = await fakeApiUnicRecipes(id)
        ItenRecipe(res)
    })
    
  
}
sendRecipe()