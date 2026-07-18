const launcher = document.getElementById("launcher");
const search = document.getElementById("search");

document.addEventListener("keydown",(event)=>{

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

const appButtons=document.querySelectorAll("#appGrid button");

search.addEventListener("input",()=>{

    const value=search.value.toLowerCase();

    appButtons.forEach(button=>{

        const name=button.dataset.name.toLowerCase();

        button.style.display=name.includes(value)?"block":"none";

    });

});

appButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        launcher.classList.remove("active");

        Nova.createWindow({

            title:button.dataset.name,

            icon:button.textContent.split(" ")[0],

            content:`
                <h2>${button.dataset.name}</h2>
                <p>Welcome to NovaOS.</p>
            `

        });

    });

});