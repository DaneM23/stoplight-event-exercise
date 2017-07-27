(function() {


  'use strict';
  const stop = document.getElementById("stopButton")
  const stop1 = document.getElementById("stopLight")
  stop.addEventListener("click", function () {
        stop1.classList.toggle("stop")
        });
  stop.addEventListener("mouseenter", function () {
          console.log("Entered stop button")
        });
  stop.addEventListener("mouseleave", function () {
          console.log("Left stop button")
        });

  const slow = document.getElementById("slowButton")
  const slow1 = document.getElementById("slowLight")
  slow.addEventListener("click", function () {
        slow1.classList.toggle("slow")
        });
  slow.addEventListener("mouseenter", function () {
        console.log("Entered slow button")
        });
  slow.addEventListener("mouseleave", function () {
          console.log("Left slow button")
        });

  const go = document.getElementById("goButton")
  const go1 = document.getElementById("goLight")
  go.addEventListener("click", function () {
        go1.classList.toggle("go")
        });
  go.addEventListener("mouseenter", function () {
          console.log("Entered go button")
        });
  go.addEventListener("mouseleave", function () {
          console.log("Left go button")
        });



})();
