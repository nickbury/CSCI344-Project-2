(function () {
  "use strict";

  var textext = $("#textarea").textext({ plugins : "tags" });
  var searchArray, i;

  $("#search").bind("click", function () {
    searchArray = textext.textext()[0].hiddenInput().val();
    $("#output").append(searchArray);
  });

}());