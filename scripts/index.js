function openModal () {
    const body = document.getElementById("modalBody")
    const openModal = document.getElementById("openModal")
    const modalOpen = document.getElementById("modalOpen")

    openModal.addEventListener("click", () => {
        body.append(createModal())
    })
}
openModal()

function btnActived () {
    const btnFilterAll = document.getElementById("btnFilterAll")
    const btnFilterEntry = document.getElementById("btnFilterEntry")
    const btnFilterExit = document.getElementById("btnFilterExit")

    const btnAll = document.querySelectorAll(".btnOutline-default cursor-pointer")

    
    

    btnFilterAll.addEventListener("click", () => {
        createList(insertedValues)
        const btnFilterActived = document.querySelectorAll(".btnOutline-actived")
        btnFilterActived.forEach(elem => {
            elem.classList.remove("btnOutline-actived")
        })
        btnFilterAll.classList.add("btnOutline-actived")
    })

    btnFilterEntry.addEventListener("click", () => {
        const valueFilter = insertedValues.filter(value => {
            if(value.categoryID === valuesCategory.indexOf(btnFilterEntry.innerText)+1){
                return true
            }
            return false
        })
        createList(valueFilter)

        const btnFilterActived = document.querySelectorAll(".btnOutline-actived")
        btnFilterActived.forEach(elem => {
            elem.classList.remove("btnOutline-actived")
        })
        btnFilterEntry.classList.add("btnOutline-actived")
    })

    btnFilterExit.addEventListener("click", () => {
        const valueFilter = insertedValues.filter(value => {
            if(value.categoryID === valuesCategory.indexOf(btnFilterExit.innerText)+1){
                return true
            }
            return false
        })
        createList(valueFilter)
        const btnFilterActived = document.querySelectorAll(".btnOutline-actived")
        btnFilterActived.forEach(elem => {
            elem.classList.remove("btnOutline-actived")
        })
        btnFilterExit.classList.add("btnOutline-actived")
    })
}
btnActived()



