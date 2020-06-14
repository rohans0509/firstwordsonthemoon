var viewPort = $(window).width()
if (viewPort < 1028) {
  var navItem = ($(".nav-item")[0]);
  console.log("done");
  $(navItem).removeClass("home");
}
