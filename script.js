function sendData() {
    
    const p = Number(document.getElementById("valueP").value);
    const q = Number(document.getElementById("valueQ").value);
    // imports the value of the input as numbers

    let d = ((p / 2) ** 2 - q);
    //calculates the value under the sqrt

    if (d < 0) {
        document.getElementById("output1").innerHTML = "Nicht lösbar";
        document.getElementById("output2").innerHTML = " ";
        // checks if the value under the sqrt is less than zero
        // if true writes error instead of answer
    }

    else {
        let resultA = -p / 2 + Math.sqrt(d);
        resultA = resultA.toFixed(3)
        let resultB = -p / 2 - Math.sqrt(d);
        resultB = resultB.toFixed(3) 
        //calculates formula
        //rounds up numbers to 3 numbers after decimal
        //converts to strings

        document.getElementById("output1").innerHTML = "x<sub>1</sub> = " + resultA;
        document.getElementById("output2").innerHTML = "x<sub>2</sub> = " + resultB;
        //displays the answers down below
        
    }

        
}