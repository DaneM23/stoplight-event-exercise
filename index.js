(function() {
  'use strict';
  const stop = document.getElementById("stopButton")
  const stop1 = document.getElementById("stopLight")
  stop.addEventListener("click", function () {
        stop1.classList.toggle("stop")
        });

  const slow = document.getElementById("slowButton")
  const slow1 = document.getElementById("slowLight")
  slow.addEventListener("click", function () {
        slow1.classList.toggle("slow")
        });

  const go = document.getElementById("goButton")
  const go1 = document.getElementById("goLight")
  go.addEventListener("click", function () {
        go1.classList.toggle("go")
        });
})();

/*
const go = document.getElementById("goButton")
const go1 = document.getElementById("goLight")
const goBulb = document.getElementByClassName("go")
go.addEventListener("click", function () {
go1.style.backgroundColor.toggleClass("go");
})
*/
