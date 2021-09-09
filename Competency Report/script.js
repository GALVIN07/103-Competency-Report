var hunger=100;
var energy=50;

var experience=0;
var stamina=100


function feed(){
    console.log(`Hunger is ${hunger}, energy is ${energy}`)

    if(hunger>0){
        hunger=hunger-10;
        displayC1();
    }
    if(energy<100){
        energy=energy+10;
        displayC1();
    }
}

function displayC1(){
    document.getElementById(`info-c1`).innerHTML=`
    <p><b>Hunger:</b> ${hunger}%</p>
    <p><b>Energy:</b> ${energy}%</p>
    `;
    

}
function cast(){
    if(experience>=0){
        experience=experience+10;
        displayC2();
    }
    if(stamina>0){
        stamina=stamina-10;
        displayC2();
    }
}

function displayC2(){
    document.getElementById(`info-c2`).innerHTML=`
    <p><b>Experience:</b> ${experience}XP</p>
    <p><b>Stamina:</b> ${stamina}%</p>
    `;
    

}

function init(){
    displayC1();
    displayC2();
}

window.onload = init;
