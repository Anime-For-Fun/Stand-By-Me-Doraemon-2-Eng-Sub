function moonColor(){
    element.classList.remove("sun-mode");
    element.classList.add("dark-mode");
    localStorage.setItem("dark", "true");
}

function sunColor(){
    element.classList.remove("dark-mode");
    element.classList.add("sun-mode");
    if (darkColor){
    localStorage.clear();}
    }
