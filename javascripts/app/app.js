(function () {
  "use strict";

  var textext = $("#textarea").textext({ plugins : "tags" });
  var searchString, i, searchArray;
  var twitter = new ctwitter.CTwitter();

  $("#search").bind("click", function () {
    searchString = textext.textext()[0].hiddenInput().val();
    searchString = searchString.replace(/(["\[\]])/ig, "");
    searchArray = searchString.split(/\,/);
    twitter.stream("statuses/filter", {lang: "en", track: searchArray}, function (stream) {
      stream.on("data", function (tweet) {
        $("#output").append("<p>" + tweet.text + "</p>");
      });
    });
  });

}());