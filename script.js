

let dataList

// --fetch--------------------------------------------------------------------------------------------------------------------
function gitApiListRecipes() {
    fetch("http://localhost:3333/recipes")
    .then((response) => response.json())
    .then((data) => {
        dataList = data; 
        data.map((i)=>{
            injectListRecipesInDom(i)   
        })
    })
}
function gitApiListCategory() {
    fetch("http://localhost:3333/category")
    .then((response) => response.json())
    .then((data) => {
        data.map((i)=>{
            const select = document.getElementById("selectCategory")
        
            const option = document.createElement("option")
            option.className ="optionCategory"
            option.value = i.value      
            option.innerHTML = i.value
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

        const h1 = document.createElement("h1")
         h1.className = "itenRecipesTitle"
  
        
        ul.appendChild(li)
        li.appendChild(a)
        a.appendChild(img)
        a.appendChild(h1)
        h1.innerText= params.title
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
gitApiListRecipes()     
gitApiListCategory()