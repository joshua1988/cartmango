// document.addEventListener('DOMContentLoaded', function() {
//   console.log("content loaded");
//   console.log("Meta description property : ", $('meta[property="og:description"]'));
// });


chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    // console.log(obj);
    product_image.src = request.source;
  }
});

function onWindowLoad() {

  var product_image = document.querySelector('#product_image');
  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "js/getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;
