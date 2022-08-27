// animacion para mostrar y ocultar el formulario
let buttom=document.getElementById("newTask")
let form=document.getElementById("formElement")
let buttomCancel=document.getElementById("btnCancel")

buttom.addEventListener("click", ()=>{
    form.classList.add("active")
})

buttomCancel.addEventListener("click", ()=>{
    form.classList.remove("active")
})