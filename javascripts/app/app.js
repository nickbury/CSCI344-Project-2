(function () {
  "use strict";
  /*global window*/
  /*global ctwitter*/

  var $ = window.$, textext = $("#textarea").textext({ plugins : "tags" }), searchString, i = 0, searchArray;

  function twitterStreamConstructor(searchterms, childnum) {
    var twitter = new ctwitter.CTwitter();
    twitter.stream("statuses/filter", {lang: "en", track: searchterms}, function (stream) {
      stream.on("data", function (tweet) {
        $(".output" + childnum).prepend("<div class='response'>" + tweet.text + "</div>");
        $(".response").fitText(1.1, {minFontSize: 10, maxFontSize: '40px' });
        $(".response").fadeIn(250).delay(3250).fadeOut(200, function () {
          $(this).remove();
        });
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
    i = i + 1;
    $(".output").append("<p class='output" + i + "'></p>");
    twitterStreamConstructor(searchArray, i);
  });
}());