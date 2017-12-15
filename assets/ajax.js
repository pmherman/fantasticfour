var query;
var startDate;
var endDate;
var page;
console.log(query);

$("#search").click(function {
    var searchTerms = $("#searchTerms").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    var recordsNumber = $("#recordsNumber").val();
})



var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
        'api-key': "af53452d509244bf9e15faf3ed6bccd8",
        'q': query,
        'begin_date': startDate,
        'end_date': endDate,
        'page': page
});
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          console.log(response);
          
          var info = $("<div>");

          var info.addclass("info");
          
        });