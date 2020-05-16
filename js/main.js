document.addEventListener('DOMContentLoaded', function () {

    var focusParent = document.querySelectorAll("[focus-attr]")
    var focusChild = document.querySelectorAll("[focusing-attr]")
    focusParent.forEach(item => {
        item.addEventListener("focusin", function (e) {
            let trueFFocus = e.target.getAttribute("focus-attr")
            let Element = "[focusing-attr=" + trueFFocus + "]"
            document.querySelector(Element).style.boxShadow = "0 0 7px 2px rgba(255, 255, 255, 0.9)";
        });

        item.addEventListener("focusout", function (e) {
            let falseFocus = document.querySelectorAll("[focusing-attr]")
            falseFocus.forEach(e => {
                e.style.boxShadow = "none";
            })
        });
    })


    //payement card flip and animation
    var paymentCard = document.querySelector(".payment-card");
    document.querySelector(".cvv-number").addEventListener("focusin", flipCardBack);
    document.querySelector(".cvv-number").addEventListener("focusout", flipCardFront);
    function flipCardBack() {
        paymentCard.classList.add("flip");
    }
    function flipCardFront() {
        paymentCard.classList.remove("flip");
    }


    //Card Number animation
    var cardNumber = document.querySelector("#CardImgNum");
    var inputNumber = document.querySelector("input.number");
    inputNumber.addEventListener("input", function (e) {
        if (inputNumber.value.length == 0) {
            document.getElementById('numHide').innerHTML = '################';
        }
        else {
            if(inputNumber.value.length==1){
                checkCard(inputNumber.value);
             }
            document.querySelector('#numHide').innerHTML = this.value;
        }
        let a = document.querySelectorAll(".card-no-Item span")
            let numHide = document.getElementById("numHide");
            strNum = numHide.innerText.split("");
            strNum.forEach(function (e, i) {
                if (i >= 4 && i < 12) {
                    strNum[i] = "<span>#</span>"
                }
                else {
                    strNum[i] = "<span>" + e + "</span>"
                }
            })
            strNum = strNum.join("");
            document.getElementById("CardImgNum").innerHTML = strNum;
    })
    //check card brand
    function checkCard(cardType){
        let brands= document.querySelectorAll(".card-brands img");
        brands.forEach(function(e){
            e.classList.add("d-none")
            e.classList.remove("brandsAnimate")
            if(cardType=="5"){
                var masterCard = document.querySelectorAll(".master-card")
                masterCard.forEach(item=>{
                     item.classList.remove("d-none");
                     item.classList.add("brandsAnimate");
                })
            }
            else if(cardType=="6"){
                var discover = document.querySelectorAll(".discover")
                discover.forEach(item=>{
                     item.classList.remove("d-none");
                     item.classList.add("brandsAnimate");
                })  
            }
            else{
                var visa = document.querySelectorAll(".visa")
                visa.forEach(item=>{
                     item.classList.remove("d-none");
                     item.classList.add("brandsAnimate");
                })  
            }
        })
        
    }
    
    //cvv number
    cvvNumber = document.getElementById("cvvNumber");
    cvvNumber.addEventListener('input', function (e) {
        document.querySelector('.cvv-input').innerHTML = this.value;
    })

    //Card Name and animation
    cardName.addEventListener('input', function () {
        if (cardName.value.length == 0) {
            document.getElementById('nameHide').innerHTML = 'Enter Full Name';
        }
        else {
            document.getElementById('nameHide').innerHTML = this.value;
        }
        let nameHide = document.getElementById("nameHide");
        let strName = nameHide.innerText.split("")
        strName.forEach(function (e, i) {
            strName[i] = "<span>" + e + "</span>"
        })
        strName = strName.join("");
        document.getElementById("cardImgName").innerHTML = strName;
    });

    //select Card Expiry month/date
    var selMonth = document.getElementById("month")
    var selYear = document.getElementById("year")
    selMonth.addEventListener("change", function (e) {
        document.getElementById("mm").innerHTML = "<span>" + this.value + "</span>";
    })
    selYear.addEventListener("change", function (e) {
        document.getElementById("yy").innerHTML = "<span>" + this.value + "</span>";
    })


}, false);
