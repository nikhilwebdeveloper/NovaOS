let highestZ = 100;

const Nova = {

    desktop: document.body,

    createWindow(options){

        const windowEl = document.createElement("div");
        windowEl.className = "window show";

        windowEl.innerHTML = `

            <div class="window-titlebar">

                <span>${options.icon} ${options.title}</span>

                <div class="window-buttons">

                    <button class="min-btn">−</button>

                    <button class="close-btn">✕</button>

                </div>

            </div>

            <div class="window-content">

                ${options.content}

            </div>

        `;

        this.desktop.appendChild(windowEl);

        const closeBtn = windowEl.querySelector(".close-btn");

        const minBtn = windowEl.querySelector(".min-btn");

        const titlebar = windowEl.querySelector(".window-titlebar");

        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        minBtn.addEventListener("click",()=>{

            windowEl.style.display="none";

        });

        closeBtn.addEventListener("click",()=>{

            windowEl.remove();

        });

        windowEl.style.left = "200px";
        windowEl.style.top = "120px";
        windowEl.style.position = "absolute";

        titlebar.addEventListener("mousedown",(e)=>{

        isDragging = true;

            offsetX = e.clientX - windowEl.offsetLeft;
            offsetY = e.clientY - windowEl.offsetTop;

        });

        document.addEventListener("mousemove",(e)=>{

            if(!isDragging) return;

            windowEl.style.left = (e.clientX-offsetX)+"px";
            windowEl.style.top  = (e.clientY-offsetY)+"px";

        });

        document.addEventListener("mouseup",()=>{

            isDragging = false;

        });

         windowEl.style.zIndex = highestZ++;
        windowEl.addEventListener("mousedown",()=>{

            windowEl.style.zIndex = highestZ++;

        });

    }

};