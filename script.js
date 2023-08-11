 var darkColor = localStorage.getItem('dark');
 var element = document.documentElement;
 if (darkColor){
     element.classList.add('dark-mode');
 }
 else{
     element.classList.add('sun-mode');
}
