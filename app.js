let buttons = document.querySelectorAll(".button-container button");
let display = document.querySelector(".display");

buttons.forEach((choice) => {
    choice.addEventListener("click", () => {
        console.log(choice.value);
       display.value += choice.value;
       console.log(display.value);
       if(choice.getAttribute("id") === "equalsTo"){
        calculate(display.value);
       }
       else if(choice.getAttribute("id") === "clear") {
        display.value = "";
       }
    });
});

const calculate = (val) => {
    try{
    display.value  = eval(val);
    }
    catch(error){
        display.value = "Error";
    }
}

