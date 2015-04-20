
///// PROJECTS GEL SCRIPT
//============================================================/
(function() {
  var triggerBttn = document.getElementById("ourhouse_trigger"),
    ourHouseGel = document.querySelector("div.ourhouse_gel"),
    closeBttn = ourHouseGel.querySelector("button.gel_screen_close");
    transEndEventNames = {
      "WebkitTransition" : "webkitTransitionEnd",
      "MozTransition" : "transitionend",
      "OTransition" : "oTransitionEnd",
      "msTransition" : "MSTransitionEnd",
      "transition" : "transitionend"
    },
    transEndEventName = transEndEventNames[
      Modernizr.prefixed("transition")
    ],
    support = {
      transitions : Modernizr.csstransitions
    };

  function toggleOverlay() {
    if(classie.has(ourHouseGel, "open")) {
      classie.remove(ourHouseGel, "open");
      classie.add(ourHouseGel, "close");
      var onEndTransitionFn = function(ev) {
        if(support.transitions) {
          if(ev.propertyName !== "visibility") return;
          this.removeEventListener(transEndEventName, onEndTransitionFn);
        }
        classie.remove(ourHouseGel, "close");
      };
      if(support.transitions) {
        ourHouseGel.addEventListener(transEndEventName, onEndTransitionFn);
      }
      else {
        onEndTransitionFn();
      }
    }
    else if(!classie.has(ourHouseGel, "close")) {
      classie.add(ourHouseGel, "open");
    }
  }

  triggerBttn.addEventListener("click", toggleOverlay);
  closeBttn.addEventListener("click", toggleOverlay);
})();