var apiKey = "150409badb574b9d9746fad48c9a558a";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': apiKey,
  'q': "GeorgeWashington",

});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(response) {
  console.log(response);
}).fail(function(err) {
  throw err;
});