(function () {
  "use strict";

  var textext = $("#textarea").textext({ plugins : "tags" });
  var searchString, i, searchArray;

  $("#search").bind("click", function () {
    searchString = textext.textext()[0].hiddenInput().val();
    searchString = searchString.replace(/(["\[\]])/ig, "");
    searchArray = searchString.split(/\,/);
    $("#output").html(searchArray[1]);
  });

}());