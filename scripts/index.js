function openModal () {
    const body = document.getElementById("modalBody")
    const openModal = document.getElementById("openModal")
    const modalOpen = document.getElementById("modalOpen")

    openModal.addEventListener("click", () => {
        body.append(createModal())
    })

    modalOpen.addEventListener("click", () => {
        body.append(createModal())
    })
}
openModal()

function btnActived () {
    const btnFilterAll = document.getElementById("btnFilterAll")
    const btnFilterEntry = document.getElementById("btnFilterEntry")
    const btnFilterExit = document.getElementById("btnFilterExit")

    btnFilterAll.addEventListener("click", () => {
        const btnFilterActived = document.querySelectorAll(".btnOutline-actived")
        btnFilterActived.forEach(elem => {
            elem.classList.remove("btnOutline-actived")
        })
        btnFilterAll.classList.add("btnOutline-actived")
    })

    btnFilterEntry.addEventListener("click", () => {
        const btnFilterActived = document.querySelectorAll(".btnOutline-actived")
        btnFilterActived.forEach(elem => {
            elem.classList.remove("btnOutline-actived")
        })
        btnFilterEntry.classList.add("btnOutline-actived")
    })

    btnFilterExit.addEventListener("click", () => {
        const btnFilterActived = document.querySelectorAll(".btnOutline-actived")
        btnFilterActived.forEach(elem => {
            elem.classList.remove("btnOutline-actived")
        })
        btnFilterExit.classList.add("btnOutline-actived")
    })
}
btnActived()

