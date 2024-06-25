import injectListRecipes from "../components/ItenListRecipes.js";

export default function  onselectOption(selectValue,DATA) {

    let lista = document.getElementsByTagName('li')

    for(var i = lista.length - 1; i >= 0; i--){lista[i].remove() }

    if (selectValue === "all") {
        DATA.map((i)=>{     
            injectListRecipes(i) 
        })
    }else{
        DATA.map((i)=>{
            if(i.category === selectValue) { 
                injectListRecipes(i)
            }
        })
    }
}
