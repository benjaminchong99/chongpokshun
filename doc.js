window.onscroll = function() {revealbutton()};

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function revealbutton(){
    topbutton = document.getElementById("goupbutton");
    if (document.body.scrollTop>600||document.documentElement.scrollTop>600){
        topbutton.style.display="block";
    }else{
        topbutton.style.display="none";
    }
}