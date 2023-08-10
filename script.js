 var darkColor = localStorage.getItem('dark');
 var element = document.documentElement.style;
 if (darkColor){
     element.setProperty("--v1", '#000');
     element.setProperty("--v2", '#333');
     element.setProperty("--v3", '#fff');
     document.getElementById("sun").style.display='block';
}
 else{
     element.setProperty("--v1", '#f0f0f5');
     element.setProperty("--v2", '#fff');
     element.setProperty("--v3", '#000');
     document.getElementById("moon").style.display='block';
}

function moonColor(){
    document.getElementById("moon").style.display='none';
    document.getElementById('sun').style.display='block';
    element.setProperty("--v1", '#000');
    element.setProperty("--v2", '#333');
    element.setProperty("--v3", '#fff');
    localStorage.setItem('dark', 'True');
 }

function sunColor(){
    document.getElementById("sun").style.display='none';
    document.getElementById('moon').style.display='block';
    element.setProperty("--v1", '#f0f0f5');
    element.setProperty("--v2", '#fff');
    element.setProperty("--v3", '#000');
    if (darkColor){
    localStorage.clear();}
    }
 

