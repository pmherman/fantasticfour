


$("#search").on("click", function() {
    var searchTerms = $("#searchTerms").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    var recordsNumber = $("#recordsNumber").val();
})

$("#clearResults").on("click" function() {
    $("#articles, #searchTerms, #startYear, #endYear, #recordsNumber").empty();
});

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
        'api-key': "af53452d509244bf9e15faf3ed6bccd8",
        'q': searchTerms,
        'begin_date': startYear,
        'end_date': endYear,
        'page': recordsNumber
});
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          console.log(response);
          
          var info = $("<div>");

          info.addclass("info");

          var infoURL = response.queryURL;

          $("#articles").prepend(response);
          $("#articles").append(infoURL);



          
        });