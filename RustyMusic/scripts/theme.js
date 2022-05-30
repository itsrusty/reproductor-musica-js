const dark = document.querySelector(".dark");
// const white = document.querySelector(".white");


// dark theme
dark.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");

    // add to localstorage
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("dark-theme", "true");
    }else{
        localStorage.setItem("dark-theme", "false");
    }
})

// validate mode 
    if (localStorage.getItem("dark-theme") === "true") {
        document.body.classList.add("dark-theme");
    
    }else{
        document.body.classList.remove("dark-theme");
    }
