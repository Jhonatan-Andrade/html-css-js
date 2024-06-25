import Start from "./iconStars.js"

export default function ItenRecipes(iten) {
    
        const ul = document.querySelector(".listRecipes")

        const li = document.createElement("li")
        li.className = "li",
        li.id = iten.category

        const a = document.createElement("a")
        a.className = "itenRecipes",
        a.href = "",
        a.target = "_blank"

        const img = document.createElement("img")
        img.className = "itenRecipesImg",
        img.alt = iten.title,
        img.src = iten.img

        const divData = document.createElement("div")
        divData.className = "data"

        const h1 = document.createElement("h1")
        h1.className = "itenRecipesTitle"

        const divStars = document.createElement("div")
        divStars.className = "boxStars"

        const p = document.createElement("p")
        p.className = "starts"
        

        ul.appendChild(li)
        li.appendChild(a)
        a.appendChild(img)
        a.appendChild(divData)
        divData.appendChild(h1)
        h1.innerText= iten.title

        divData.appendChild(divStars)

 
        const numberStars =  parseInt(iten.stars)

        switch(numberStars) {
            case 1: {
                divStars.innerHTML = Start[0] 
                break;
            }
            case 2: {
                divStars.innerHTML = Start[1] 
                break;
            }
            case 3: {
                divStars.innerHTML = Start[2]
                break;
            }
            case 4: {
                divStars.innerHTML = Start[3]
                break;
            }
            case 5: {
                divStars.innerHTML = Start[4]
                break;
            }
        }

    
}