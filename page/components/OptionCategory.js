export default function optionCategory(params) {
    params.map((i)=>{
        const select = document.getElementById("selectCategory")
    
        const option = document.createElement("option")
        option.className ="optionCategory"
        option.value = i      
        option.innerHTML = i
        option.onclick ="onselectOption()"
    
        select.appendChild(option)
        
    })
}

