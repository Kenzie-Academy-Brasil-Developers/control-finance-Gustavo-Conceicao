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
        btnFilterAll.classList.toggle("btnOutline-actived")
    })
    btnFilterEntry.addEventListener("click", () => {
        btnFilterEntry.classList.toggle("btnOutline-actived")
    })
    btnFilterExit.addEventListener("click", () => {
        btnFilterExit.classList.toggle("btnOutline-actived")
        console.log(btnFilterExit)
    })

}
btnActived()