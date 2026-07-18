const dockItems=document.querySelectorAll(".dock-item");

dockItems.forEach(item=>{

    item.addEventListener("click",()=>{

        dockItems.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

    });

});