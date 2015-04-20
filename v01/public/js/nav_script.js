
///// NAVIGATION SCRIPT
//============================================================/
$(".projects").hide();
$("#projects_trigger").click(function() {
  $(".index").fadeOut(1000, function() {
    $(".projects").fadeIn(1000);
  });
}); // projects

$("#home_trigger").click(function() {
  $(".projects").fadeOut(1000, function() {
    $(".index").fadeIn(1000);
  });
}); // home
