export default function WarningFakwApi() {
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