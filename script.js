
const lableInput = document.getElementById("labelvalue")
const form = document.querySelector("#form");
const select = document.querySelector("#select");

lableInput.addEventListener("keyup", (e) => {
    const keyPressed = e.key;

    if(keyPressed === "Enter"){
        const type = select.value;
        const label = lableInput.value;

        const div = document.createElement("div");
        const lab = document.createElement("label");
        let inp = null;
        if(type === "textarea"){
            inp = document.createElement("textarea");
        }
        else{
            inp = document.createElement("input");
        }
        inp.type = type;
        inp.classList.add("form-control","mb-3");
        lab.innerText = lableInput.value
        lab.classList.add("form-label");
        
        if(type != "submit"){
            div.append(lab);
        }
        if(type === "submit"){
            inp.classList.add("btn");
            inp.classList.add("btn-success");
            inp.classList.add("mt-3");
            inp.value = label;
        }

        div.append(inp);
        form.append(div);





    }

})