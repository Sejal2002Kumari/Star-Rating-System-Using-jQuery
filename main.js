$(document).ready(function () {
  $("li").mouseover(function () {
    var current = $(this); //ek li
    $("li").each(function (index) {
      $(this).addClass("hovered-stars");
      if ($(this).index() == current.index()) {
        // console.log($(this).index());
        return false;
      }
    });
  });

  $("li").mouseleave(function () { //mouseleave is event
    $("li").removeClass("hovered-stars"); // removeClass is function ,$("li")-> array
  });

  $("li").click(function () {
    $("li").removeClass("clicked-stars");
    // console.log($($(".hovered-stars")[0]));
    // $($(".hovered-stars")[0]).addClass("clicked-stars");
    $(".hovered-stars").addClass("clicked-stars");
    // console.log($("li"));
    
    $("#msg").html(
      "Thanks! you have rated this " + $(".clicked-stars").length + " stars."
      );
  });

});
