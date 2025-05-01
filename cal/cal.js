const t=document.getElementById("dis");
function app(input){
    t.value +=input;
}
function clearr() {
    t.value = " ";
}
document.addEventListener("keydown", function(event) {
    let key = event.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        
        app(key);
    } else if (key === "Enter") {
        
        cal();
    } else if (key === "Backspace") {
    
        del();
    } else if (key === "Escape") {
        
        clearr();
    }
    
});

function cal(){
    try{
    t.value=eval(t.value);
    }
    catch(error){
        t.value="Invalid"

    }
}


function del() {  
    t.value = t.value.slice(0, -1); 
}
function sqrt() {
    t.value = Math.sqrt(parseFloat(t.value));
}
