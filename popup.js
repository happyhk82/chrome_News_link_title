document.addEventListener('DOMContentLoaded', function() {
  var extractButton = document.getElementById('extractButton');
  var resultDiv = document.getElementById('result');

  extractButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var tab = tabs[0];
      var url = tab.url;
      var title = tab.title;

      // 클립보드에 URL과 타이틀 복사      
      copyToClipboard('<A href =' + url + '>##</A>' + ' ' + title);      
      resultDiv.innerHTML = '<A href =' + url + '>#news#</A>' + ' ' + title + '<br><br>' + '<A href =' + url + '>#report#</A>' + ' ' + title; 	

      
    });
  });

  // 클립보드로 복사하는 함수
  function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
});
