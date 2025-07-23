const but = document.querySelector("button");

let count = false;
    but.addEventListener("click", () => {
        // console.log("clicked");

        let task = document.createElement("div");
        task.className = "task";
       
        let img  = document.createElement("img");
        img.src= "unchecked.png";
        
        const inputVal = document.querySelector("input").value;
        let textNode = document.createTextNode(" " + inputVal);

        let del  = document.createElement("img");
        del.src= "remove.png";
        del.className = "del";
        
        task.appendChild(img);
        task.appendChild(textNode);
        task.appendChild(del);
        
        

        document.querySelector(".container").appendChild(task);
        document.querySelector("input").value = "";

        
        
        img.addEventListener("click", ()=>{
          console.log("completed");
          count = !count;
          img.src = count? "checked.png":"unchecked.png";
          
          task.style.textDecoration = count?"line-through":"none";
          
        })

        const d = task.querySelector(".del");

        d.addEventListener("click", () => {
          task.remove(); // Removes the entire task div
        });

       
    });
    
  