//for loop:
const styles=["bold","italic", "normal"];
for (Name of styles){
    console.log (styles);
if (Name === "italic"){
    console.log("%cI'm Italic and pink!","font-style:italic; color:pink");
}
    if (Name === "bold"){
        console.log("%cI'm in Bold and yellow!!","font-weight:bold;color:yellow");
}
}
//while loop:
let full= 0;
while (full<100){
    console.log('Page is ready to be used!');
    full++;
}
// styling css with js:
const text= document.querySelector(".title");
const animation= document.querySelector(".myAnimation");

function myAnimation() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }
