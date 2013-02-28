(function () {
  "use strict";

  var textext = $("#textarea").textext({ plugins : "tags" });
  var searchString, i = 0, searchArray;

  function twitterStreamConstructor(searchterms, childnum) {
    var twitter = new ctwitter.CTwitter();
    twitter.stream("statuses/filter", {lang: "en", track: searchArray}, function (stream) {
      stream.on("data", function (tweet) {
        $(".output" + childnum).append("<p>" + tweet.text + "</p>");
      });
    });
  }

  $("#search").bind("click", function () {
    searchString = textext.textext()[0].hiddenInput().val();
    searchString = searchString.replace(/(["\[\]])/ig, "");
    searchArray = searchString.split(/\,/);
    if (i !== 0) {
      $(".output" + i).remove();
    }
    i++;
    $(".output").append("<p class='output" + i + "'></p>");
    twitterStreamConstructor(searchArray, i);
  });

}());