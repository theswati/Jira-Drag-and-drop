let addCardBtn=document.querySelector("#addtask");
let todoContainer=document.querySelector("#todo");

addCardBtn.addEventListener("click",addTask);

function addTask(){
    let card=document.createElement("div")
    card.className="card";
    card.innerText="Test Card"
    card.setAttribute("contenteditable","true")
    todoContainer.append(card)//this will add the card in todo in index.html
    //pointer will be in editable zone automatically.


    //problem 1(empty card should automatically be removed)
    //focus lost=blur event
    
    card.focus();
    card.addEventListener("blur",(eventDetails)=>{
        let blurredCard=eventDetails.target;
        if(blurredCard.innerText.trim()==""){
            blurredCard.remove();
        }

    })

    //problem 2
    //make default text empty
    card.addEventListener("click",(eventDetails)=>{
        let clickedCard=eventDetails.target;
        if(clickedCard.innerText=="Test Card"){
            clickedCard.innerText=="";
        }


})
let selector=document.createElement("select")
selector.innerHTML=`
<option value="todo">todo</option>
<option value="progress">Progress</option>
<option value="done">Done</option>
`

card.append(selector)

// selector.addEventListener("change",(eventDetails)=>{
//     let selectedoption=eventDetails.target.value //todo1 progress1 done1
//      let selectedContainer=document.querySelector(`#${selectedoption}`)
//      selectedContainer.append(card);



// })

}

