(function (){
    const screenInput = document.querySelector(".screen");
    const btnAll = document.querySelectorAll(".btn");
    const clearBtn = document.querySelector(".btn-clear");
    const equalBtn = document.querySelector(".btn-equal");

    if (btnAll.length > 0) {
        btnAll.forEach(function (singleBtn) {
          singleBtn.addEventListener("click", function (event) {
            const currentNumber = event.target.dataset.num;
           
            screenInput.value += currentNumber;
            event.preventDefault();
          });
        });
      }

    clearBtn.addEventListener("click", function (event) {
        screenInput.value = "";
    });

    equalBtn.addEventListener("click", function (event) {
        if (screenInput.value == ""){
            alert("bhai jan kuch calculations to de do");
        } else {
            screenInput.value = eval(screenInput.value);
        }
    });
})();