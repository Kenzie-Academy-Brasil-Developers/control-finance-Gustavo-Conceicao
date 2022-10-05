function createList (data, valuesCategory) {
    const ul = document.getElementById("modalInput")
    ul.innerHTML = ""
    if (data.length === 0){
        const divVazia = `<div id="hidden" class="bgcolor-grey-4 flex direction-column align-center justify-center gap-15 padding-15all radius-8">
        <p class="title2-bold">Nenhum valor cadastrado</p>
        <button id="modalOpen" class="border-none text2-medium cursor-pointer">Registrar novo valor</button>
    </div>`
    ul.insertAdjacentHTML("afterbegin", divVazia)
    }else{
        data.forEach(elem => {
            const li = document.createElement("li")
            const price = document.createElement("span")
            const div = document.createElement("div")
            const filter = document.createElement("button")
            const figure = document.createElement("figure")
            const img = document.createElement("img")
        
            li.classList = "flex direction-row align-center justify-between width-100 margin-auto border-li padding-li radius-8"
            price.classList = "text2-medium"
            div.classList = "flex align-center justify-between gap-15"
            filter.classList = "btn-filterModal"
            figure.classList = "figure-img flex align-center"
            img.classList = "img-trash cursor-pointer"
        
            price.innerText = `R$ ${elem.value}`
            if(elem.categoryID === 1){
                filter.innerText = "Entrada"
            }else{
                filter.innerText = "Saída"
            }
            
            img.src = "../../assets/trash.png"
            
            figure.append(img)
            div.append(filter,figure)
            li.append(price, div)
            ul.append(li)
        })
    }
}

createList(insertedValues,valuesCategory)