function actionToggle(){
    var action = document.querySelector('.action');
    action.classList.toggle('active')
}
 //after window is loaded completely 
 window.onload = function(){
    //hide the preloader
    document.querySelector(".preloader").style.display = "none";
   
}
