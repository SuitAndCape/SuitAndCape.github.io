
///// GEL SCRIPT
//============================================================/
(function() {
  var triggerBttn = document.getElementById("gel_trigger"),
    screenGel = document.querySelector("div.gel"),
    closeBttn = screenGel.querySelector("button.gel_screen_close");
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
    if(classie.has(screenGel, "open")) {
      classie.remove(screenGel, "open");
      classie.add(screenGel, "close");
      var onEndTransitionFn = function(ev) {
        if(support.transitions) {
          if(ev.propertyName !== "visibility") return;
          this.removeEventListener(transEndEventName, onEndTransitionFn);
        }
        classie.remove(screenGel, "close");
      };
      if(support.transitions) {
        screenGel.addEventListener(transEndEventName, onEndTransitionFn);
      }
      else {
        onEndTransitionFn();
      }
    }
    else if(!classie.has(screenGel, "close")) {
      classie.add(screenGel, "open");
    }
  }

  triggerBttn.addEventListener("click", toggleOverlay);
  closeBttn.addEventListener("click", toggleOverlay);
})();