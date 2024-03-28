//drag and drop

let addCardBtn=document.querySelector("#addCard");
let todoContainer=document.querySelector("#todo");


addCardBtn.addEventListener("click",addTask);

function addTask(){
    let card=document.createElement("div");
    card.className="card"
    card.innerText="Test Card";
    //contenteditable
    card.setAttribute("contenteditable","true")
    //allow drag-draggable
    card.setAttribute("draggable","true")
    todoContainer.append(card)
//pointer will be in editable mode automatically
card.focus()

//step1=>start the dragging

//drag start
card.addEventListener("dragstart",(eventDetails)=>{
    let draggedCard = eventDetails.target
    //we store unique of that element

    eventDetails.dataTransfer.setData("text/plain" ,draggedCard.id)
    draggedCard.style.opacity=0.5;
})

// dragend
card.addEventListener("dragend",(eventDetails)=>{
    let draggedCard=eventDetails.target
    draggedCard.style.opacity = 1;
})

}