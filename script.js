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
    liDOM.innerHTML = `${element} <span class="close">&times;</span>`
    ulDOM.append(liDOM)
}

const removeElement = (event) => {
    let itemDOM = event.target
    itemDOM.parentNode.remove()
}

const checkedElement = (event) => {
    event.target.classList.toggle("checked")
}

const ulClickEvents = (event) => {
    if(event.target.tagName ==='SPAN'){
        removeElement(event)
    }
    else if(event.target.tagName === 'LI') {
        checkedElement(event)
    }

}
ulDOM.addEventListener('click', ulClickEvents)
