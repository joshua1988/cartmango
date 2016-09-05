// document.addEventListener('DOMContentLoaded', function() {
//   console.log("content loaded");
//   console.log("Meta description property : ", $('meta[property="og:description"]'));
// });


chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    // console.log(obj);
    // product_image.src = request.source;

    // console.log(request.source);
    var product = request.source;
    product_image.src = product.productImage;
    product_name.innerText = product.productName;
    product_url.href = product.productUrl;
  }
});

function onWindowLoad() {

  var product_image = document.querySelector('#product_image');
  var product_name = document.querySelector('#product_name');
  var product_url = document.querySelector('#product_url');
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
