// function inventar(){
//     var a = document.getElementById("inventar");
//     a.classList.add("active");
// }
document.getElementById("first").style.display = "block";
document.getElementById("second").style.display = "none";
document.getElementById("third").style.display = "none";
document.getElementById("forth").style.display = "none";
document.getElementById("fifth").style.display = "none";

const inventar = document.getElementById("inventar");
const Schlüsselbund = document.getElementById("Schlüsselbund");
const Geldbeutel = document.getElementById("Geldbeutel");
const Klamotten = document.getElementById("Klamotten");
const Rucksack = document.getElementById("Rucksack");

inventar.onclick = ()=>{
    inventar.classList.add("active"); //show info box
    Schlüsselbund.classList.remove("active");
    Geldbeutel.classList.remove("active");
    Klamotten.classList.remove("active");
    Rucksack.classList.remove("active");
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "none";
    document.getElementById("forth").style.display = "none";
    document.getElementById("fifth").style.display = "none";
}
Schlüsselbund.onclick = ()=>{
    inventar.classList.remove("active"); //show info box
    Schlüsselbund.classList.add("active");
    Geldbeutel.classList.remove("active");
    Klamotten.classList.remove("active");
    Rucksack.classList.remove("active");
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("third").style.display = "none";
    document.getElementById("forth").style.display = "none";
    document.getElementById("fifth").style.display = "none";
}
Geldbeutel.onclick = ()=>{
    inventar.classList.remove("active"); //show info box
    Schlüsselbund.classList.remove("active");
    Geldbeutel.classList.add("active");
    Klamotten.classList.remove("active");
    Rucksack.classList.remove("active");
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
    document.getElementById("forth").style.display = "none";
    document.getElementById("fifth").style.display = "none";
}
Klamotten.onclick = ()=>{
    inventar.classList.remove("active"); //show info box
    Schlüsselbund.classList.remove("active");
    Geldbeutel.classList.remove("active");
    Klamotten.classList.add("active");
    Rucksack.classList.remove("active");
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "none";
    document.getElementById("forth").style.display = "block";
    document.getElementById("fifth").style.display = "none";
}
Rucksack.onclick = ()=>{
    inventar.classList.remove("active"); //show info box
    Schlüsselbund.classList.remove("active");
    Geldbeutel.classList.remove("active");
    Klamotten.classList.remove("active");
    Rucksack.classList.add("active");
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "none";
    document.getElementById("forth").style.display = "none";
    document.getElementById("fifth").style.display = "block";
}



const alles = document.getElementById("alles");
const rohstoffe = document.getElementById("rohstoffe");
const arzneimittel = document.getElementById("arzneimittel");
const essen = document.getElementById("essen");
const waffen = document.getElementById("waffen");
const drogen = document.getElementById("drogen");
const trinken = document.getElementById("trinken");
const munition = document.getElementById("munition");
const sonstiges = document.getElementById("sonstiges");

alles.onclick = ()=>{
    alles.style.background = "rgba(255, 255, 255, 0.301)";
    alles.style.background = "linear-gradient(0deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.4) 72%, rgba(255,255,255,0) 100%)";
    
    rohstoffe.style.background = "rgb(187,63,150)";
    rohstoffe.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    arzneimittel.style.background = "rgb(187,63,150)";
    arzneimittel.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    essen.style.background = "rgb(187,63,150)";
    essen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    waffen.style.background = "rgb(187,63,150)";
    waffen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    drogen.style.background = "rgb(187,63,150)";
    drogen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    trinken.style.background = "rgb(187,63,150)";
    trinken.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    munition.style.background = "rgb(187,63,150)";
    munition.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    sonstiges.style.background = "rgb(187,63,150)";
    sonstiges.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

}

rohstoffe.onclick = ()=>{
    rohstoffe.style.background = "rgba(255, 255, 255, 0.301)";
    rohstoffe.style.background = "linear-gradient(0deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.4) 72%, rgba(255,255,255,0) 100%)";
    
    alles.style.background = "rgb(187,63,150)";
    alles.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    arzneimittel.style.background = "rgb(187,63,150)";
    arzneimittel.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    essen.style.background = "rgb(187,63,150)";
    essen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    waffen.style.background = "rgb(187,63,150)";
    waffen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    drogen.style.background = "rgb(187,63,150)";
    drogen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    trinken.style.background = "rgb(187,63,150)";
    trinken.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    munition.style.background = "rgb(187,63,150)";
    munition.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    sonstiges.style.background = "rgb(187,63,150)";
    sonstiges.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

}

arzneimittel.onclick = ()=>{
    arzneimittel.style.background = "rgba(255, 255, 255, 0.301)";
    arzneimittel.style.background = "linear-gradient(0deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.4) 72%, rgba(255,255,255,0) 100%)";
    
    rohstoffe.style.background = "rgb(187,63,150)";
    rohstoffe.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    alles.style.background = "rgb(187,63,150)";
    alles.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    essen.style.background = "rgb(187,63,150)";
    essen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    waffen.style.background = "rgb(187,63,150)";
    waffen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    drogen.style.background = "rgb(187,63,150)";
    drogen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    trinken.style.background = "rgb(187,63,150)";
    trinken.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    munition.style.background = "rgb(187,63,150)";
    munition.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    sonstiges.style.background = "rgb(187,63,150)";
    sonstiges.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

}

essen.onclick = ()=>{
    essen.style.background = "rgba(255, 255, 255, 0.301)";
    essen.style.background = "linear-gradient(0deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.4) 72%, rgba(255,255,255,0) 100%)";
    
    rohstoffe.style.background = "rgb(187,63,150)";
    rohstoffe.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    arzneimittel.style.background = "rgb(187,63,150)";
    arzneimittel.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    alles.style.background = "rgb(187,63,150)";
    alles.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    waffen.style.background = "rgb(187,63,150)";
    waffen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    drogen.style.background = "rgb(187,63,150)";
    drogen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    trinken.style.background = "rgb(187,63,150)";
    trinken.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    munition.style.background = "rgb(187,63,150)";
    munition.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    sonstiges.style.background = "rgb(187,63,150)";
    sonstiges.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

}

waffen.onclick = ()=>{
    waffen.style.background = "rgba(255, 255, 255, 0.301)";
    waffen.style.background = "linear-gradient(0deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.4) 72%, rgba(255,255,255,0) 100%)";
    
    rohstoffe.style.background = "rgb(187,63,150)";
    rohstoffe.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    arzneimittel.style.background = "rgb(187,63,150)";
    arzneimittel.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    essen.style.background = "rgb(187,63,150)";
    essen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    alles.style.background = "rgb(187,63,150)";
    alles.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    drogen.style.background = "rgb(187,63,150)";
    drogen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    trinken.style.background = "rgb(187,63,150)";
    trinken.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    munition.style.background = "rgb(187,63,150)";
    munition.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    sonstiges.style.background = "rgb(187,63,150)";
    sonstiges.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

}

drogen.onclick = ()=>{
    drogen.style.background = "rgba(255, 255, 255, 0.301)";
    drogen.style.background = "linear-gradient(0deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.4) 72%, rgba(255,255,255,0) 100%)";
    
    rohstoffe.style.background = "rgb(187,63,150)";
    rohstoffe.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    arzneimittel.style.background = "rgb(187,63,150)";
    arzneimittel.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    essen.style.background = "rgb(187,63,150)";
    essen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    waffen.style.background = "rgb(187,63,150)";
    waffen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    alles.style.background = "rgb(187,63,150)";
    alles.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    trinken.style.background = "rgb(187,63,150)";
    trinken.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    munition.style.background = "rgb(187,63,150)";
    munition.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    sonstiges.style.background = "rgb(187,63,150)";
    sonstiges.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

}

trinken.onclick = ()=>{
    trinken.style.background = "rgba(255, 255, 255, 0.301)";
    trinken.style.background = "linear-gradient(0deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.4) 72%, rgba(255,255,255,0) 100%)";
    
    rohstoffe.style.background = "rgb(187,63,150)";
    rohstoffe.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    arzneimittel.style.background = "rgb(187,63,150)";
    arzneimittel.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    essen.style.background = "rgb(187,63,150)";
    essen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    waffen.style.background = "rgb(187,63,150)";
    waffen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    drogen.style.background = "rgb(187,63,150)";
    drogen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    alles.style.background = "rgb(187,63,150)";
    alles.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    munition.style.background = "rgb(187,63,150)";
    munition.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    sonstiges.style.background = "rgb(187,63,150)";
    sonstiges.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

}

munition.onclick = ()=>{
    munition.style.background = "rgba(255, 255, 255, 0.301)";
    munition.style.background = "linear-gradient(0deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.4) 72%, rgba(255,255,255,0) 100%)";
    
    rohstoffe.style.background = "rgb(187,63,150)";
    rohstoffe.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    arzneimittel.style.background = "rgb(187,63,150)";
    arzneimittel.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    essen.style.background = "rgb(187,63,150)";
    essen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    waffen.style.background = "rgb(187,63,150)";
    waffen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    drogen.style.background = "rgb(187,63,150)";
    drogen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    trinken.style.background = "rgb(187,63,150)";
    trinken.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    alles.style.background = "rgb(187,63,150)";
    alles.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    sonstiges.style.background = "rgb(187,63,150)";
    sonstiges.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

}

sonstiges.onclick = ()=>{
    sonstiges.style.background = "rgba(255, 255, 255, 0.301)";
    sonstiges.style.background = "linear-gradient(0deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.4) 72%, rgba(255,255,255,0) 100%)";
    
    rohstoffe.style.background = "rgb(187,63,150)";
    rohstoffe.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    arzneimittel.style.background = "rgb(187,63,150)";
    arzneimittel.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    essen.style.background = "rgb(187,63,150)";
    essen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    waffen.style.background = "rgb(187,63,150)";
    waffen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    drogen.style.background = "rgb(187,63,150)";
    drogen.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    trinken.style.background = "rgb(187,63,150)";
    trinken.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    munition.style.background = "rgb(187,63,150)";
    munition.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

    alles.style.background = "rgb(187,63,150)";
    alles.style.background = "linear-gradient(0deg, rgba(139,55,179,0.6) 0%, rgba(187,63,150,0.6) 100%)";

}



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

  function dropp(ev) {
    
    //var a = document.getElementsByClassName("rd_item rd_item1");
    //document.getElementById('bodyitems').childNodes[1].childNodes[1].style.display = "Hut";
    // document.getElementById('bodyitems').childNodes[1].childNodes[2].style.display = "none";
    //ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }