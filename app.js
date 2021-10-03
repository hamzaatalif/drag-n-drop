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
        }
        else {
            box.previousElementSibling.style.background = "green"
        }
    })
}