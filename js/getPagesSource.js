// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);


function getProductInfo(doc) {
  // var product_image_src = document.querySelector("img").src;

  var productNameElement = document.querySelector('meta[property="og:title"]').content;
  var productImageElement = document.querySelector('meta[property="og:image"]').content;
  var productUrlElement = document.querySelector('meta[property="og:url"]').content;

  var product = {
    "productName" : productNameElement,
    "productImage" : productImageElement,
    "productUrl" : productUrlElement
  }

  return product;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: getProductInfo(document)
});
