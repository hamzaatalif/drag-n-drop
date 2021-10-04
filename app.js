function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function noAllowDrop(ev) {
    ev.stopPropagation();
}



function dropCheck(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    let ele = document.getElementById(data);
    ele.parentElement.previousElementSibling.style.background = "green"
}


setInterval(checkData,10)

function checkData() {    
    let dropBox = document.querySelectorAll(".droppedItemBox");
    dropBox.forEach((box)=>{
        if (!box.children.length){
            box.previousElementSibling.style.background = "red"
            box.style.backgroundImage = "url(./images/bg2.png)";
        }
        else {
            box.previousElementSibling.style.background = "green"  
            box.style.backgroundImage = "";
        }
    })
}


let menuItemsContainers = document.querySelectorAll(".menu-items-container")
let menuBtns = document.querySelectorAll(".menu-btn");

menuBtns.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        let position = index;
        menuBtns.forEach((btn,index)=>{
            if (index==position) {
                btn.classList.add("active-btn")
            }
            else {
                btn.classList.remove("active-btn")
            } 
        })
        menuItemsContainers.forEach((container,index)=>{            
            if (index==position) {
                container.classList.remove("not-active")
            }
            else {
                container.classList.add("not-active")
            }            
        })
    })
})