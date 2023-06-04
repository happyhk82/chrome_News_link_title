document.addEventListener('DOMContentLoaded', function() {
  var extractButton = document.getElementById('extractButton');
  var resultDiv = document.getElementById('result');

  extractButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var tab = tabs[0];
      var url = tab.url;
      var title = tab.title;

      resultDiv.innerHTML = 'URL: ' + url + '<br>Title: ' + title;
    });
  });
});
