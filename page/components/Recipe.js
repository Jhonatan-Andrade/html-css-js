import Start from "./iconStars.js"
import listIngredients from "../components/listDataIngredients.js"
import listPreparation from "../components/listDataPreparation.js"

export default function ItenRecipe(iten) {

   
        const title = document.getElementById("title")
        title.innerHTML = iten.title


        const section = document.getElementById("section")

    // section  ---------------------------------------------------

 
    //-----------------------------------------------------------------------
    // div  

        const recipeSection  = document.createElement("div")
        recipeSection.className = "recipeSection"

    //-----------------------------------------------------------------------
    // div 

        const divDescription  = document.createElement("div")
        divDescription.className = "description"

        const pDescription = document.createElement("p")
        pDescription.className = "text"
        pDescription.innerHTML = iten.description

    //-----------------------------------------------------------------------
    //div  

        const divPreparation  = document.createElement("div")
        divPreparation.className = "preparation"
        divPreparation.id = "preparation"


        const ulPreparation  = document.createElement("ul")
        ulPreparation.className = "listPreparation"
        
        iten.preparation.map((i)=>{
            const li  = document.createElement("li")
            li.innerHTML =i
            ulPreparation.appendChild(li)

        })
    
    //-----------------------------------------------------------------------
    //div   
        const divIngredients  = document.createElement("div")
        divIngredients.className = "ingredients"
        divIngredients.id = "ingredients"

        const ulIngredients  = document.createElement("ul")
        ulIngredients.className = "listIngredients"
    
        iten.ingredients.map((i)=>{
            const li  = document.createElement("li")
            li.innerHTML = i
            ulIngredients.appendChild(li)
        })

    //-----------------------------------------------------------------------
        


       

        section.appendChild(recipeSection)//div avo

        recipeSection.appendChild(divDescription)     //div pai 1
        divDescription.appendChild(pDescription) 

        recipeSection.appendChild(divIngredients) //div filho do pai 2
        divIngredients.appendChild(ulIngredients)     // list Preparation

        recipeSection.appendChild(divPreparation) //div filho do pai 2
        divPreparation.appendChild(ulPreparation)     // list Preparation
}