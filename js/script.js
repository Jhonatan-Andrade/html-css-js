



const baseurl = "http://localhost:3333"


// verificando se a API esta online

fetch(`${baseurl}/api`)
.then((res)=>{ 
    if (res.ok) {
        gitApiListRecipes(`${baseurl}/recipes`)     
        gitApiListCategory(`${baseurl}/category`)  
    }
})
.catch(()=>{
    gitApiListRecipes("./data/recipes.json")     
    gitApiListCategory("./data/category.json")
    
    warningFakwApi()
})


//aviso de uso de dados fausos
function warningFakwApi() {
    let body = document.getElementById("body")
        
    let div = document.createElement("div")
    div.style = "display:flex;  flex-direction: column; justify-content: center; align-items: center; border-radius: 10px;  color:#fff; position: fixed;top:200px; right:20px; padding:4px;  background-color: #e96767; width:40px;"
    
    let p1 = document.createElement("p")
    p1.style = " width:12px; padding: 10px 0; word-wrap: break-word;font-family:Archivo Black;font-weight: 400;font-style: normal; white-space: pre-wrap;"
    p1.innerText = "DADOS"


    let p2 = document.createElement("p")    
    p2.style = " width:12px; padding:10px 0; word-wrap: break-word;font-family:Archivo Black;font-weight: 400;font-style: normal;white-space: pre-wrap;"
    p2.innerText = "FALSOS"
    
   


    body.appendChild(div)
    div.appendChild(p1)
    div.appendChild(p2)
}

// --fetch--------------------------------------------------------------------------------------------------------------------
let dataList
function gitApiListRecipes(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        dataList = data; 
        data.map((i)=>{
            injectListRecipesInDom(i)   
        })
    })
}
function gitApiListCategory(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        data.map((i)=>{
            const select = document.getElementById("selectCategory")
        
            const option = document.createElement("option")
            option.className ="optionCategory"
            option.value = i      
            option.innerHTML = i
            option.onclick ="onselectOption()"
        
            select.appendChild(option)
            
        })

    })
}

// --inject---Recipes---InDom-------------------------------------------------------------------------------------------------
function injectListRecipesInDom(params) {
    
        const ul = document.querySelector(".listRecipes")

        const li = document.createElement("li")
        li.className = "li",
        li.id = params.category

        const a = document.createElement("a")
        a.className = "itenRecipes",
        a.href = "",
        a.target = "_blank"

        const img = document.createElement("img")
        img.className = "itenRecipesImg",
        img.alt = params.title,
        img.src = params.img

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
        h1.innerText= params.title

        divData.appendChild(divStars)

        const arrayIcons = ['<i class=" stars fa-solid fa-star"></i><i class="fa-regular stars fa-star"></i><i class="fa-regular stars fa-star"></i><i class="fa-regular stars fa-star"></i><i class="fa-regular stars fa-star"></i><i class="fa-regular stars fa-star"></i>','<i class=" stars fa-solid fa-star"></i><i class=" stars fa-solid fa-star"></i><i class="fa-regular stars fa-star"></i><i class="fa-regular stars fa-star"></i><i class="fa-regular stars fa-star"></i>','<i class=" stars fa-solid fa-star"></i><i class=" stars fa-solid fa-star"></i><i class=" stars fa-solid fa-star"></i><i class="fa-regular stars fa-star"></i><i class="fa-regular stars fa-star"></i>','<i class=" stars fa-solid fa-star"></i><i class=" stars fa-solid fa-star"></i><i class=" stars fa-solid fa-star"></i><i class=" stars fa-solid fa-star"></i><i class="fa-regular stars fa-star"></i>','<i class=" stars fa-solid fa-star"></i><i class=" stars fa-solid fa-star"></i><i class=" stars fa-solid fa-star"></i><i class=" stars fa-solid fa-star"></i><i class=" stars fa-solid fa-star"></i>']

        const n =  parseInt(params.stars)


        switch(n) {
            case 1: {
                divStars.innerHTML = arrayIcons[0]
                break;
            }
            case 2: {
                divStars.innerHTML = arrayIcons[1]
                break;
            }
            case 3: {
                divStars.innerHTML =arrayIcons[2]
                break;
            }
            case 4: {
                divStars.innerHTML =arrayIcons[3]
                break;
            }
            case 5: {
                divStars.innerHTML =arrayIcons[4]
                break;
            }
        }

        
}

// --filter-------------------------------------------------------------------------------------------------------------------
function  onselectOption() {

    let lista = document.getElementsByTagName('li')

    for(var i = lista.length - 1; i >= 0; i--){lista[i].remove() }

    const select = document.getElementById("selectCategory");
    let value =  select.options[select.selectedIndex].value;
    if (value === "all") {
        dataList.map((i)=>{     
            injectListRecipesInDom(i) 
        })
    }else{
        dataList.map((i)=>{
            if(i.category === value) { 
                injectListRecipesInDom(i)
            }
        })
    }
}

// --function--start----------------------------------------------------------------------------------------------------------
