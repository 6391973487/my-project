var settingmenu = document.querySelector(".setting-menu");

var darkBtn=document.getElementById("dark-btn");



function settingMenuToggle(){
    settingmenu.classList.toggle("setting-menu-height");
}
darkBtn.onclick=function(){



    debugger;
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");


    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}


if(localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}




