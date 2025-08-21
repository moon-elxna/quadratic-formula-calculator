function sendData() {
    const valueP = document.getElementById("valueP").value;
    const valueQ = document.getElementById("valueQ").value;
    if (valueP.trim() === "" || valueQ.trim() === "") {
        document.getElementById("output1").innerHTML = "Bitte beide Werte eingeben";
        document.getElementById("output2").innerHTML = " ";
        return;
    }

    else{

  
        const p = Number(document.getElementById("valueP").value);
        const q = Number(document.getElementById("valueQ").value);
        // imports the value of the input as numbers

        let d = ((p / 2) ** 2 - q);
        //calculates the value under the sqrt

        if (d < 0) {

            let control = document.getElementById("buttonLang").innerHTML;

            if (control == "Deutsch"){
                document.getElementById("output1").innerHTML = "Nicht lösbar";
                document.getElementById("output2").innerHTML = " ";
                // checks if the value under the sqrt is less than zero
                // if true writes error instead of answer
            }

            else if (control =="English") {
                document.getElementById("output1").innerHTML = "No solution";
                document.getElementById("output2").innerHTML = " ";
            }

            else {
                alert("Error beim Sprachenwechsel. / Error when changing language.")
            }

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

        
}

function setLang(){
    let control = document.getElementById("buttonLang").innerHTML;

    if (control == "Deutsch"){
        document.getElementById("title").innerHTML = "p-q-Formel Rechner";
        document.getElementById("h1").innerHTML = "p-q-Formel Rechner";
        document.getElementById("h21").innerHTML = "Ausgangsform";
        document.getElementById("p1").innerHTML = "x² + px + q = 0";
        document.getElementById("h22").innerHTML = "Eingabe";
        document.getElementById("labelp").textContent = "Wert von p:";
        document.getElementById("labelq").textContent  = "Wert von q:";
        document.getElementById("send").innerHTML = "Berechnen";
        document.getElementById("h23").innerHTML = "Ergebnis";
        document.getElementById("output1").innerHTML = "Antwort";
        document.getElementById("output2").innerHTML = " ";        
        document.getElementById("buttonLang").innerHTML = "English";

    }

    else if (control =="English") {
        document.getElementById("title").innerHTML = "Quadratic formula calculator";
        document.getElementById("h1").innerHTML = "Quadratic formula calculator";
        document.getElementById("h21").innerHTML = "Standard form";
        document.getElementById("p1").innerHTML = "x² + bx + c = 0";
        document.getElementById("h22").innerHTML = "Input";
        document.getElementById("labelp").textContent  = "Value of b:";
        document.getElementById("labelq").textContent  = "Value of c:";
        document.getElementById("send").innerHTML = "Calculate";
        document.getElementById("h23").innerHTML = "Result";
        document.getElementById("output1").innerHTML = "Answer";
        document.getElementById("output2").innerHTML = " ";       
        document.getElementById("buttonLang").innerHTML = "Deutsch";

    }

    else {
        alert("Error beim Sprachenwechsel. / Error when changing language.")
    }

}