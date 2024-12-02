const form = document.getElementById("myForm");
const  input  =  document.getElementById("Input");
const SquareContainer  =  document.getElementById("SquareContainer");

form.addEventListener("submit",generateSquares);

 function generateSquares(e){
        e.preventDefault();
        const num = input.value;
    
        if (num) {
            createSquare(num);
            input.value = "";
        }
    }
    
    function createSquare(num) {
        const SquareDiv = document.createElement("div");
        SquareDiv.classList.add("square-div");
    
        
            let result = `${num} * ${num} = ${num * num}`;
            let div = document.createElement("div");
            div.classList.add("square")
            div.innerText = result;
            SquareDiv.append(div);
        
    
        SquareContainer.append(SquareDiv); 
    }
 
