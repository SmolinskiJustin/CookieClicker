let cookieCount = 0;
let cookieButton = document.querySelector("#cookieButton");
let cookieCountDisplay = document.querySelector("#cookieCount");
cookieCountDisplay.innerHTML = 0;

let activeUpgrade1Price = 250;
let activeUpgrade2Price = 1000;
let activeUpgrade3Price = 6000;
let activeUpgrade4Price = 6000;

let passiveUpgrade1Price = 5000;
let passiveUpgrade2Price = 30000;
let passiveUpgrade3Price = 80000;
let passiveUpgrade4Price = 200000;

cookieButton.addEventListener("click", function(){
    cookieCount++;
    cookieCountDisplay.innerHTML = cookieCount;
});

// function checkForUpgrades(){
//     if (cookieCount)
// };

function activateActiveUpgrade1(){
    //opacity set to 100%;
    //purchase button active
};



// function addCookie(){
// };