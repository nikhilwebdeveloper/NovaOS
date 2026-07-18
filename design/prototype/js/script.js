


// Launcher

const launcher = document.getElementById("launcher");
const search = document.getElementById("search");

document.addEventListener("keydown",function(event){

    if(event.ctrlKey && event.code==="Space"){

        event.preventDefault();

        launcher.classList.toggle("active");

        if(launcher.classList.contains("active")){

            search.focus();

        }

    }

    if(event.key==="Escape"){

        launcher.classList.remove("active");

    }

});

const dockItems = document.querySelectorAll(".dock-item");

dockItems.forEach(item=>{

    item.addEventListener("click",()=>{

        dockItems.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

    });

});

const appButtons = document.querySelectorAll("#appGrid button");

search.addEventListener("input",()=>{

    const value = search.value.toLowerCase();

    appButtons.forEach(button=>{

        const name = button.dataset.name.toLowerCase();

        if(name.includes(value)){

            button.style.display="block";

        }else{

            button.style.display="none";

        }

    });

});

appButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        alert(button.dataset.name + " launching...");

    });

});

const filesWindow = document.getElementById("filesWindow");
const closeFiles = document.getElementById("closeFiles");

appButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        if(button.dataset.name==="Files"){

            filesWindow.classList.add("show");

            launcher.classList.remove("active");

        }

    });

});

closeFiles.addEventListener("click",()=>{

    filesWindow.classList.remove("show");

});