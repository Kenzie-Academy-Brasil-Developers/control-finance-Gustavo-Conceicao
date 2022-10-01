function createList (data, valuesCategory) {
    const ul = document.getElementById("modalInput")
    const divUl = document.querySelector("bgcolor-grey-4 flex direction-column align-center justify-center gap-15 padding-15all radius-8")
    if (data.length === 0){
        ul.append(divUl)
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
            filter.innerText = valuesCategory
            img.src = "../../assets/trash.png"
            
            figure.append(img)
            div.append(filter,figure)
            li.append(price, div)
            ul.append(li)
        })
    }
}

createList(insertedValues,valuesCategory)