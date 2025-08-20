function sendData() {
    console.log("worked")

    const p = Number(document.getElementById("valueP").value);
    const q = Number(document.getElementById("valueQ").value);
    let resultA, resultB; // Declare variables outside the if/else

    let control = ((p / 2) ** 2 - q);
    console.log(control)

    if (control < 0) {
        document.getElementById("output1").innerHTML = "Nicht lösbar";
    }

    else {
        let resultA = -p / 2 + Math.sqrt(control);
        resultA = resultA.toFixed(3)
        let resultB = -p / 2 - Math.sqrt(control);
        resultB = resultB.toFixed(3) 

        console.log("x1 =", resultA);
        console.log("x2 =", resultB);

        document.getElementById("output1").innerHTML = "x<sub>1</sub> = " + resultA;
        document.getElementById("output2").innerHTML = "x<sub>2</sub> = " + resultB;
        
    }

        
}