function sendData() {
    console.log("worked")

    const p = Number(document.getElementById("valueP").value);
    const q = Number(document.getElementById("valueQ").value);
    let resultA, resultB; // Declare variables outside the if/else

    let d = ((p / 2) ** 2 - q);
    console.log(d)

    if (d < 0) {
        document.getElementById("output1").innerHTML = "Nicht lösbar";
        document.getElementById("output2").innerHTML = " ";
    }

    else {
        let resultA = -p / 2 + Math.sqrt(d);
        resultA = resultA.toFixed(3)
        let resultB = -p / 2 - Math.sqrt(d);
        resultB = resultB.toFixed(3) 

        console.log("x1 =", resultA);
        console.log("x2 =", resultB);

        document.getElementById("output1").innerHTML = "x<sub>1</sub> = " + resultA;
        document.getElementById("output2").innerHTML = "x<sub>2</sub> = " + resultB;
        
    }

        
}