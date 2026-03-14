const t=document.getElementById("dis");
const color=document.getElementById("color")
const cl=document.getElementById("cal");
const option=document.querySelectorAll(".color-option")
const opt=document.getElementById("palette-options")
const bt=document.querySelectorAll(".g");


        
    color.addEventListener("click",(e)=>{
      e.stopPropagation();
      opt.classList.toggle("show");
    });
    document.addEventListener("click",()=>{
      opt.classList.remove("show");
    });

option.forEach(color => {
    color.addEventListener("click", function (e) {
          e.stopPropagation();

        const selectedColor = this.dataset.color;
        cl.style.borderColor=selectedColor;

        bt.forEach(btn => {
            btn.style.backgroundColor = selectedColor;
        });

    });
});



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
