//game variables
let cookieCount = 0;
let cookiesPerSecond = 0;
let cookieButton = document.querySelector("#cookieButton");
let cookieCountDisplay = document.querySelector("#cookieCount");
cookieCountDisplay.innerHTML = 0;
let cookiesPerClick = 1;

//upgrade price variables
let activeUpgrade1Price = 10;
let activeUpgrade2Price = 50;
let activeUpgrade3Price = 250;
let activeUpgrade4Price = 1000;
let passiveUpgrade1Price = 25;
let passiveUpgrade2Price = 100;
let passiveUpgrade3Price = 500;
let passiveUpgrade4Price = 2000;

//upgrade header DOM objects
let activeUpgrade1 = document.querySelector("#activeUpgrade1");
let activeUpgrade2 = document.querySelector("#activeUpgrade2");
let activeUpgrade3 = document.querySelector("#activeUpgrade3");
let activeUpgrade4 = document.querySelector("#activeUpgrade4");
let passiveUpgrade1 = document.querySelector("#passiveUpgrade1");
let passiveUpgrade2 = document.querySelector("#passiveUpgrade2");
let passiveUpgrade3 = document.querySelector("#passiveUpgrade3");
let passiveUpgrade4 = document.querySelector("#passiveUpgrade4");

//upgrade purchase button DOM objects
let purchaseBtn1 = document.querySelector("#purchaseBtn1");
let purchaseBtn2 = document.querySelector("#purchaseBtn2");
let purchaseBtn3 = document.querySelector("#purchaseBtn3");
let purchaseBtn4 = document.querySelector("#purchaseBtn4");
let purchaseBtn5 = document.querySelector("#purchaseBtn5");
let purchaseBtn6 = document.querySelector("#purchaseBtn6");
let purchaseBtn7 = document.querySelector("#purchaseBtn7");
let purchaseBtn8 = document.querySelector("#purchaseBtn8");

//upgrade indicator icon DOM objects
let activeUpgrade1Indicator = document.querySelector("#activeUpgrade1Indicator");
let activeUpgrade2Indicator = document.querySelector("#activeUpgrade2Indicator");
let activeUpgrade3Indicator = document.querySelector("#activeUpgrade3Indicator");
let activeUpgrade4Indicator = document.querySelector("#activeUpgrade4Indicator");
let passiveUpgrade1Indicator = document.querySelector("#passiveUpgrade1Indicator");
let passiveUpgrade2Indicator = document.querySelector("#passiveUpgrade2Indicator");
let passiveUpgrade3Indicator = document.querySelector("#passiveUpgrade3Indicator");
let passiveUpgrade4Indicator = document.querySelector("#passiveUpgrade4Indicator");

activeUpgrade1Indicator.style.display = "none";
activeUpgrade2Indicator.style.display = "none";
activeUpgrade3Indicator.style.display = "none";
activeUpgrade4Indicator.style.display = "none";
passiveUpgrade1Indicator.style.display = "none";
passiveUpgrade2Indicator.style.display = "none";
passiveUpgrade3Indicator.style.display = "none";
passiveUpgrade4Indicator.style.display = "none";

//disable upgrade variables
let isActiveUpgrade1Disabled = false;
let isActiveUpgrade2Disabled = false;
let isActiveUpgrade3Disabled = false;
let isActiveUpgrade4Disabled = false;
let isPassiveUpgrade1Disabled = false;
let isPassiveUpgrade2Disabled = false;
let isPassiveUpgrade3Disabled = false;
let isPassiveUpgrade4Disabled = false;

window.setInterval(function(){
    if(cookiesPerSecond > 0) {
        cookieCount += (cookiesPerSecond / 10);
    };
    cookieCountDisplay.innerHTML = parseInt(cookieCount);
}, 100);

//cookie button event listener runs game mechanics. game sits idle waiting for cookie button click
cookieButton.addEventListener("click", function(){
    cookieCount += cookiesPerClick;
    cookieCountDisplay.innerHTML = parseInt(cookieCount);
    checkForUpgrades();
    cookieButton.style.scale = 0.8;
    window.setTimeout(function(){
        cookieButton.style.scale = 1.0;
    }, 75);
});

//checks cookie count balance and unlocks available upgrades
function checkForUpgrades() {
    if (cookieCount >= activeUpgrade1Price && isActiveUpgrade1Disabled == false) {
        activeUpgrade1.style.opacity = 1.0;
        purchaseBtn1.style.opacity = 1.0;
        purchaseBtn1.disabled = false;
    };
    if (cookieCount >= activeUpgrade2Price && isActiveUpgrade2Disabled == false) {
        activeUpgrade2.style.opacity = 1.0;
        purchaseBtn3.style.opacity = 1.0;
        purchaseBtn3.disabled = false;
    };
    if (cookieCount >= activeUpgrade3Price && isActiveUpgrade3Disabled == false) {
        activeUpgrade3.style.opacity = 1.0;
        purchaseBtn5.style.opacity = 1.0;
        purchaseBtn5.disabled = false;
    };
    if (cookieCount >= activeUpgrade4Price && isActiveUpgrade4Disabled == false) {
        activeUpgrade4.style.opacity = 1.0;
        purchaseBtn7.style.opacity = 1.0;
        purchaseBtn7.disabled = false;
    };
    if (cookieCount >= passiveUpgrade1Price && isPassiveUpgrade1Disabled == false) {
        passiveUpgrade1.style.opacity = 1.0;
        purchaseBtn2.style.opacity = 1.0;
        purchaseBtn2.disabled = false;
    };
    if (cookieCount >= passiveUpgrade2Price && isPassiveUpgrade2Disabled == false) {
        passiveUpgrade2.style.opacity = 1.0;
        purchaseBtn4.style.opacity = 1.0;
        purchaseBtn4.disabled = false;
    };
    if (cookieCount >= passiveUpgrade3Price && isPassiveUpgrade3Disabled == false) {
        passiveUpgrade3.style.opacity = 1.0;
        purchaseBtn6.style.opacity = 1.0;
        purchaseBtn6.disabled = false;
    };
    if (cookieCount >= passiveUpgrade4Price && isPassiveUpgrade4Disabled == false) {
        passiveUpgrade4.style.opacity = 1.0;
        purchaseBtn8.style.opacity = 1.0;
        purchaseBtn8.disabled = false;
    };
};

//disables buttons and headers
function disableUpgradeCSS() {
    activeUpgrade1.style.opacity = 0.5;
    purchaseBtn1.style.opacity = 0.5;
    purchaseBtn1.disabled = true;

    activeUpgrade2.style.opacity = 0.5;
    purchaseBtn3.style.opacity = 0.5;
    purchaseBtn3.disabled = true;

    activeUpgrade3.style.opacity = 0.5;
    purchaseBtn5.style.opacity = 0.5;
    purchaseBtn5.disabled = true;

    activeUpgrade4.style.opacity = 0.5;
    purchaseBtn7.style.opacity = 0.5;
    purchaseBtn7.disabled = true;

    passiveUpgrade1.style.opacity = 0.5;
    purchaseBtn2.style.opacity = 0.5;
    purchaseBtn2.disabled = true;

    passiveUpgrade2.style.opacity = 0.5;
    purchaseBtn4.style.opacity = 0.5;
    purchaseBtn4.disabled = true;

    passiveUpgrade3.style.opacity = 0.5;
    purchaseBtn6.style.opacity = 0.5;
    purchaseBtn6.disabled = true;

    passiveUpgrade4.style.opacity = 0.5;
    purchaseBtn8.style.opacity = 0.5;
    purchaseBtn8.disabled = true;
};

//updates cookie balance display, disables all upgrades then re-enables the affordable upgrades. used by all upgrade functions.
function upgradeLogic(){
    cookieCountDisplay.innerHTML = parseInt(cookieCount);
    disableUpgradeCSS();
    checkForUpgrades();
};

//enables upgrades and indicators and assigns 
function enableActiveUpgrade1(){
    isActiveUpgrade1Disabled = true;
    activeUpgrade1Indicator.style.display = "block";
    cookieCount -= activeUpgrade1Price;
    cookiesPerClick++;
    upgradeLogic();
};
function enableActiveUpgrade2() {
    isActiveUpgrade2Disabled = true;
    activeUpgrade2Indicator.style.display = "block";
    cookieCount -= activeUpgrade2Price;
    cookiesPerClick +=2 ;
    upgradeLogic();
};
function enableActiveUpgrade3() {
    isActiveUpgrade3Disabled = true;
    activeUpgrade3Indicator.style.display = "block";
    cookieCount -= activeUpgrade3Price;
    cookiesPerClick += 3;
    upgradeLogic();
};
function enableActiveUpgrade4() {
    isActiveUpgrade4Disabled = true;
    activeUpgrade4Indicator.style.display = "block";
    cookieCount -= activeUpgrade4Price;
    cookiesPerClick += 4;
    upgradeLogic();
};
function enablePassiveUpgrade1() {
    isPassiveUpgrade1Disabled = true;
    passiveUpgrade1Indicator.style.display = "block";
    cookiesPerSecond += 1;
    cookieCount -= passiveUpgrade1Price;
    upgradeLogic();
};
function enablePassiveUpgrade2() {
    isPassiveUpgrade2Disabled = true;
    passiveUpgrade2Indicator.style.display = "block";
    cookiesPerSecond += 2;
    cookieCount -= passiveUpgrade2Price;
    upgradeLogic();
};
function enablePassiveUpgrade3() {
    isPassiveUpgrade3Disabled = true;
    passiveUpgrade3Indicator.style.display = "block";
    cookiesPerSecond += 3;
    cookieCount -= passiveUpgrade3Price;
    upgradeLogic();
};
function enablePassiveUpgrade4() {
    isPassiveUpgrade4Disabled = true;
    passiveUpgrade4Indicator.style.display = "block";
    cookiesPerSecond += 4;
    cookieCount -= passiveUpgrade4Price;
    upgradeLogic();
};