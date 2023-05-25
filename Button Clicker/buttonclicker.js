function hide(element) {
    element.remove();
}

function logout(element) {

    if (element.innerText == "Logout") {
        element.innerText = "Login"
        element.style.backgroundColor = "blue";



    }
    else {

        element.innerText = "Logout";
        element.style.backgroundColor = "red";
    }


}

let rizek= document.querySelector ("#topping")

function alertt() {
        
    console.log(rizek)
    rizek.hide() 

}


// function alertt(element){


//     alert("Ninja was liked");
// }