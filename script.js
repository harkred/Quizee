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
    
    const valid = document.querySelector(".valid"+currentQtn);
    valid.style.display = "block";

    if (opted == "ans") {
        correct++;
        valid.append("Correct");
        valid.style.color = "green";
    }
    else {
        valid.append("Incorrect");
        valid.style.color = "red";
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

        const stats = document.querySelector(".stats");
        stats.style.display = "flex";

        const score = document.querySelector(".score");

        score.append(correct + "/" + maxQtn);
        return 
    }

    let nextQ = document.querySelector(".Q"+currentQtn);
    nextQ.style.display = "block";

    next.style.display = "none";  
    
    check.style.display = "block";
})