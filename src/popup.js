document.addEventListener("DOMContentLoaded", function(event) {
  var btn = document.getElementById('play_btn');
  var repeat = document.getElementById('repeat_check');
  btn.onclick = function(){
    chrome.tabs.executeScript(null, {
      code: 'var audioAutoPlayChromeExtensionRepeat = ' + repeat.checked
    }, function() {
      chrome.tabs.executeScript(null, {file: 'play.js'});
    });
  };
});
