function createModal () {
    const sectionModal = document.createElement("section")
    const divModal = document.createElement("div")
    const headerModal  = document.createElement("div")
    const titleModal   = document.createElement("h2")
    const closeModal   = document.createElement("button")
    const divRead      = document.createElement("div")
    const helpText     = document.createElement("p")
    const formInput     = document.createElement("form")
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
    divModal.classList.add("divModal")
    headerModal.classList.add("header-modal")
    titleModal.classList   = "title2-bold"
    closeModal.classList   = "btn-closeModal cursor-pointer"
    divRead.classList.add("div-read")
    helpText.classList     = "text1-bold"
    formInput.classList.add("div-input")
    labelModal.classList   = "text2-medium"
    labelModal.innerText = "Valor"
    labelModal.htmlFor = "value"
    inputModal.classList   = "input-modal"
    inputModal.required = true
    inputModal.type = "number"
    inputModal.name = "value"
    inputModal.id = "value"
    inputModal.placeholder = `R$ 00,00`
    divValue.classList.add("div-value")
    valueType.classList    = "text2-medium"
    btnEntry.classList     = "btnTypeValue cursor-pointer"
    btnExit.classList      = "btnTypeValue cursor-pointer"
    divBtn.classList.add("div-btn")
    btnCancel.classList    = "btnCancel-modal cursor-pointer"
    btnSubmit.classList    = "btnSubmit-modal cursor-pointer" 
    btnSubmit.type = "submit"

    let newValue = {};
    formInput.addEventListener("submit", (event)=> {
        event.preventDefault();
        console.log(event)
        const id = insertedValues[insertedValues.length-1].id+1
        newValue.id = id
        const formSubmit = [...event.target];
        formSubmit.forEach(elemento => {
            if(elemento.value && elemento.type != "radio"){
                newValue[elemento.name] =  Number(elemento.value)
            }else if(elemento.checked){
                newValue[elemento.name] =  Number(elemento.value)
            }
        })
        insertedValues.push(newValue);
        createList(insertedValues)
        sectionModal.remove()  
    })

    titleModal.innerText = "Registro de valor"
    closeModal.innerText = "X"
    closeModal.addEventListener("click", () => {
        sectionModal.remove()
    })
    helpText.innerText = "Digite o valor e em seguida aperte no botão referente ao tipo do valor "
        
    valueType.innerText = "Tipo de valor"
    btnEntry.innerText = "Entrada"
    btnEntry.type = "button"
    btnEntry.addEventListener("click", () => {
        newValue.categoryID = 1
        
    })
    btnExit.innerText = "Saída"
    btnExit.type = "button"
    btnExit.addEventListener("click", () => {
        newValue.categoryID = 2
        btnExit.classList.toggle("btnTypeValue:hover")
    })
    btnCancel.innerText = "Cancelar"
    btnCancel.type = "button"
    btnCancel.addEventListener("click", () => {
        sectionModal.remove()
    })
    btnSubmit.innerText = "Inserir valor"

    
    divBtn.append(btnCancel,btnSubmit)
    divValue.append(valueType,btnEntry,btnExit) 
    formInput.append(labelModal,inputModal,divValue,divBtn)
    divRead.append(helpText) 
    headerModal.append(titleModal,closeModal)
    divModal.append(headerModal,divRead,formInput)
    sectionModal.append(divModal)
        
    return sectionModal
}

createModal()