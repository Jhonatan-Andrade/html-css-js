
import {baseURL,gitApiListRecipes,gitApiListCategory,fakeApiListRecipes,fakeApiListCategory} from "./api.js";

//Componentes
import injectOptionCategory from "../components/OptionCategory.js";
import injectListRecipes from "../components/ItenListRecipes.js";
import WarningFakeApi from "../components/WarningDataFake.js";

// Função filter recebe 2 parametros (valor do seletor) ( lista de dados da api) 
import filter from "./filter.js";


// dados que retorna da api
let DATA

//se api estiver online pegar dados         (.then)
//se api estiver ofline pagar dados falsos  (.catch)

fetch(`${baseURL}/api`)
.then(async (res)=>{ 
    if (res.ok) {

        //pegar dados   
        const arrayListCategory = await gitApiListCategory()
        const ListRecipes = await gitApiListRecipes()  

        //renderizarando a lista
        renderTheList(arrayListCategory,ListRecipes)
       
        DATA = ListRecipes
    }
})
.catch( async ()=>{

    //pegar dados fake
    const arrayListCategory = await fakeApiListCategory()
    const ListRecipes = await fakeApiListRecipes() 

    //renderizarando a lista    
    renderTheList(arrayListCategory,ListRecipes)

    DATA = ListRecipes
    
    //sinalizando que os dados são falsos
    //WarningFakeApi()
})

//renderização das lista e das categorias 

function renderTheList(ListCat,ListRec) {
    injectOptionCategory(ListCat)

    ListRec.map((i)=>{
        injectListRecipes(i) 
    })
}


// Filtro
let select = document.getElementById("selectCategory")

select.addEventListener("change",()=>filter(select.value,DATA))



