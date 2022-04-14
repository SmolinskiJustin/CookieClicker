//game variables
let cookieCount = 0;
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

//cookie button event listener runs game mechanics. game sits idle waiting for cookie button click
cookieButton.addEventListener("click", function(){
    cookieCount += cookiesPerClick;
    cookieCountDisplay.innerHTML = cookieCount;
    checkForUpgrades();
    cookieButton.style.scale = 0.8;
    window.setTimeout(function(){
        cookieButton.style.scale = 1.0;
    }, 75);
});

//checks cookie count balance and unlocks available upgrades
function checkForUpgrades() {
    if (cookieCount >= activeUpgrade1Price) {
        activeUpgrade1.style.opacity = 1.0;
        purchaseBtn1.style.opacity = 1.0;
        purchaseBtn1.disabled = false;
    };
    if (cookieCount >= activeUpgrade2Price) {
        activeUpgrade2.style.opacity = 1.0;
        purchaseBtn3.style.opacity = 1.0;
        purchaseBtn3.disabled = false;
    };
    if (cookieCount >= activeUpgrade3Price) {
        activeUpgrade3.style.opacity = 1.0;
        purchaseBtn5.style.opacity = 1.0;
        purchaseBtn5.disabled = false;
    };
    if (cookieCount >= activeUpgrade4Price) {
        activeUpgrade4.style.opacity = 1.0;
        purchaseBtn7.style.opacity = 1.0;
        purchaseBtn7.disabled = false;
    };
    if (cookieCount >= passiveUpgrade1Price) {
        passiveUpgrade1.style.opacity = 1.0;
        purchaseBtn2.style.opacity = 1.0;
        purchaseBtn2.disabled = false;
    };
    if (cookieCount >= passiveUpgrade2Price) {
        passiveUpgrade2.style.opacity = 1.0;
        purchaseBtn4.style.opacity = 1.0;
        purchaseBtn4.disabled = false;
    };
    if (cookieCount >= passiveUpgrade3Price) {
        passiveUpgrade3.style.opacity = 1.0;
        purchaseBtn6.style.opacity = 1.0;
        purchaseBtn6.disabled = false;
    };
    if (cookieCount >= passiveUpgrade4Price) {
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

function enableActiveUpgrade1(){
    cookieCount -= activeUpgrade1Price;
    cookieCountDisplay.innerHTML = cookieCount;
    cookiesPerClick++;
    disableUpgradeCSS();
    checkForUpgrades();
};
function enableActiveUpgrade2() {
    cookieCount -= activeUpgrade2Price;
    cookieCountDisplay.innerHTML = cookieCount;
    cookiesPerClick++;
    disableUpgradeCSS();
    checkForUpgrades();
};
function enableActiveUpgrade3() {
    cookieCount -= activeUpgrade3Price;
    cookieCountDisplay.innerHTML = cookieCount;
    cookiesPerClick++;
    disableUpgradeCSS();
    checkForUpgrades();
};
function enableActiveUpgrade4() {
    cookieCount -= activeUpgrade4Price;
    cookieCountDisplay.innerHTML = cookieCount;
    cookiesPerClick++;
    disableUpgradeCSS();
    checkForUpgrades();
};
function enablePassiveUpgrade1() {
    cookieCount -= passiveUpgrade1Price;
    cookieCountDisplay.innerHTML = cookieCount;
    setInterval(function(){
        cookieCount += 1;
        cookieCountDisplay.innerHTML = cookieCount;
    }, 1000);
    disableUpgradeCSS();
    checkForUpgrades();
};
function enablePassiveUpgrade2() {
    cookieCount -= passiveUpgrade2Price;
    cookieCountDisplay.innerHTML = cookieCount;
    setInterval(function () {
        cookieCount += 2;
        cookieCountDisplay.innerHTML = cookieCount;
    }, 1000);
    disableUpgradeCSS();
    checkForUpgrades();
};
function enablePassiveUpgrade3() {
    cookieCount -= passiveUpgrade3Price;
    cookieCountDisplay.innerHTML = cookieCount;
    setInterval(function () {
        cookieCount += 3;
        cookieCountDisplay.innerHTML = cookieCount;
    }, 1000);
    disableUpgradeCSS();
    checkForUpgrades();
};
function enablePassiveUpgrade4() {
    cookieCount -= passiveUpgrade4Price;
    cookieCountDisplay.innerHTML = cookieCount;
    setInterval(function () {
        cookieCount += 4;
        cookieCountDisplay.innerHTML = cookieCount;
    }, 1000);
    disableUpgradeCSS();
    checkForUpgrades();
};