function clearScreen() {
    document.getElementById("result").value = "";
}
 
//Display
function display(value) {
    document.getElementById("result").value += value;
}
 
//Evaluate
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}