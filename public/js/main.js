// main.js

///// MAIN JAVASCRIPT SNIPPETS
//=======================================================================/
console.log("Thank\'s for visiting my website!  Please say hi and let me know what you think.  Yay!");

/*===== Navigation bar collapser =====*/
$("#toggle").click(function() {
  $(this).next(".nav").toggleClass("is-collapsed-mobile");
});
