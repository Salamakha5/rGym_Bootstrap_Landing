let menuIcons = document.getElementById("menuIcons")
let burgerMenu_container = document.getElementById("burgerMenu_container")
let closeIcons = document.getElementById("closeIcons")
menuIcons.addEventListener("click",()=>{
   ChangeClass()
})
closeIcons.addEventListener("click",()=>{
   ChangeClass()
})

function ChangeClass(){
    let classList = burgerMenu_container.className.split(" ")
    console.log(classList);
    for (let i = 0; i < classList.length; i++) {
        switch (classList[i]) {
            case "d-none":
                classList[i] = "d-block"
                break;
            case "d-block":
                classList[i] = "d-none"
                break;
        }
    }
    burgerMenu_container.className = classList.toString().replaceAll(","," ")
}