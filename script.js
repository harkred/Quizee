const check = document.querySelector(".check");
const next = document.querySelector(".next");
let currentQtn = 1;
let maxQtn = 5;
let correct = 0;

check.addEventListener("click", () => {
    let name = "q" + currentQtn;

    const answers = document.getElementsByName(name);

    let opted;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            opted = answers[i].value;
            break;
        }
    }

    if (opted == "ans") {
        correct++;
    }

    let ansPara = document.querySelector(".ans"+currentQtn);
    ansPara.style.display = "block";

    next.style.display = "block";
    check.style.display = "none";

})

next.addEventListener("click", () => {
    let previousQ = document.querySelector(".Q"+currentQtn);
    previousQ.style.display = "none";

    currentQtn++;

    if (currentQtn > maxQtn) {
        next.style.display = "none"; 
        alert("finished"); 
    }

    let nextQ = document.querySelector(".Q"+currentQtn);
    nextQ.style.display = "block";

    next.style.display = "none";  
    
    check.style.display = "block";
})