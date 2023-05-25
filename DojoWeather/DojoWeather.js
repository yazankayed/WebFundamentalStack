function callAlert(element){

    alert("Loading weather report");

}

let removee = document.querySelector ("#cookies")
function callRemove(){
console.log(removee)
    removee.remove("#cookies");
}

let co = document.querySelector("#cOne");
let ct = document.querySelector("#cTwo");
let cr = document.querySelector("#cThree");
let cf = document.querySelector("#cFour");
let cv = document.querySelector("#cFive");
let cs = document.querySelector("#cSix");
let cn = document.querySelector("#cSeven");
let cg = document.querySelector("#cEight");
console.log(document.querySelector("#cOne"))
function chooseDegree(element){
if(co.innerText=="27C"){
    cn.innerText="75C";
    cg.innerText="65C";
    co.innerText="80C";
    ct.innerText="66C";
    cr.innerText="69C";
    cf.innerText="61C";
    cv.innerText="78C";
    cs.innerText="70C";
}
else{

    cn.innerText="24C";
    cg.innerText="18C";
    co.innerText="27C";
    ct.innerText="19C";
    cr.innerText="21C";
    cf.innerText="16C";
    cv.innerText="26C";
    cs.innerText="21C";
}


}