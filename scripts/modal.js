function createModal () {
    const sectionModal = document.createElement("section")
    const headerModal  = document.createElement("div")
    const titleModal   = document.createElement("h2")
    const closeModal   = document.createElement("button")
    const divRead      = document.createElement("div")
    const helpText     = document.createElement("p")
    const divInput     = document.createElement("div")
    const labelModal   = document.createElement("label")
    const inputModal   = document.createElement("input")
    const divValue     = document.createElement("div")
    const valueType    = document.createElement("h3")
    const btnEntry     = document.createElement("button")
    const btnExit      = document.createElement("button")
    const divBtn       = document.createElement("div")
    const btnCancel    = document.createElement("button")
    const btnSubmit    = document.createElement("button")

    sectionModal.classList.add("section-modal")
    headerModal.classList.add("header-modal")
    titleModal.classList   = "title2-bold"
    closeModal.classList   = "btn-closeModal cursor-pointer"
    divRead.classList.add("div-read")
    helpText.classList     = "text1-bold"
    divInput.classList.add("div-input")
    labelModal.classList   = "text2-medium"
    inputModal.classList   = "input-modal"
    divValue.classList.add("div-value")
    valueType.classList    = "text2-medium"
    btnEntry.classList     = "btnTypeValue cursor-pointer"
    btnExit.classList      = "btnTypeValue cursor-pointer"
    divBtn.classList.add("div-btn")
    btnCancel.classList    = "btnCancel-modal cursor-pointer"
    btnSubmit.classList    = "btnSubmit-modal cursor-pointer" 

    titleModal.innerText = "Registro de valor"
    closeModal.innerText = "X"
    closeModal.addEventListener("click", () => {
        sectionModal.remove()
    })
    helpText.innerText = "Digite o valor e em seguida aperte no botão referente ao tipo do valor "
    labelModal.innerText = "Valor"
    inputModal.placeholder = `R$ 00,00`
    valueType.innerText = "Tipo de valor"
    btnEntry.innerText = "Entrada"
    btnExit.innerText = "Saída"
    btnCancel.innerText = "Cancelar"
    btnSubmit.innerText = "Inserir valor"

    divBtn.append(btnCancel,btnSubmit)
    divValue.append(valueType,btnEntry,btnExit) 
    divInput.append(labelModal,inputModal)
    divRead.append(helpText) 
    headerModal.append(titleModal,closeModal)
    sectionModal.append(headerModal,divRead,divInput,divValue,divBtn)

    return sectionModal

}

createModal()