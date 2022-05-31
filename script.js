const ulDOM = document.getElementById("list")
const taskDOM = document.getElementById("task")
const alertDOM = document.getElementById("alert")

function newElement(){
    let task = taskDOM.value
    if(task) { 
        addNewElement(task) 
        $('.success').toast('show') 
    } else {
        $('.error').toast('show')
    }
    
}

function addNewElement(element){
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${element} <span onclick="removeElement()" class="close">&times;</span>`
    ulDOM.append(liDOM)
}

const removeElement = () => {
    let itemDOM = document.querySelector('#list .close')
    itemDOM.parentNode.remove()
}

const checkedElement = (event) => {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle("checked")
    }
}
ulDOM.addEventListener('click', checkedElement)