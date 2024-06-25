import category from "./data/category.json" with{type:"json"};
import recipes from "./data/recipes.json" with{type:"json"};



export const baseURL = "http://localhost:3333"

export async function fakeApiListRecipes() {return recipes}
export async function fakeApiListCategory() { return category}


export async function gitApiListRecipes() {
    const data = fetch(baseURL+"/recipes")
        .then((response) => response.json())
        .then((data) => data)
    return data
 } 
export async function gitApiListCategory() {
    const data = fetch(baseURL+"/category")
        .then((response) => response.json())
        .then((data) => data)
    return data
}
export async function getApiRecipe(id) {
    const data = fetch(baseURL+"/recipe/"+id)
        .then((response) => response.json())
        .then((data) => data)
    return data
    
}
