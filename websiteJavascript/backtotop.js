var scrollTop = document.getElementById('back-to-top');

window.onscroll = function(){
    scrollfunction()
};

function scrollfunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
}


scrollTop.addEventListener('click', function(){
    window.scrollTo({ 
        left: 0, 
        top: 0, 
        behavior: 'smooth'});
});
