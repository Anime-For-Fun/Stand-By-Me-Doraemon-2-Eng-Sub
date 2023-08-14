 var darkColor = localStorage.getItem('dark');
 var element = document.documentElement;
 if (darkColor){
     element.classList.add('dark-mode');
 }
 else{
     element.classList.add('sun-mode');
}

function searchFunc(){
    document.getElementById('search-bar').style.visibility='visible';
}

function hideFunc(){
    document.getElementById('search-bar').style.visibility='hidden';
}

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

