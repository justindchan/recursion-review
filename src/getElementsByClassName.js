// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//create an array to store the result in
//return a function that checks if classList contains the classname, if it does push into the array
//loop through each childnode to check if element type matches className using recursion
//add child node to array if child node class matches className
//return array

var getElementsByClassName = function(className, node = document.body) {
  // your code here
  var arrayByClass = [];
  if (node.classList && node.classList.contains(className)) {
    arrayByClass.push(node);
  }
  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      arrayByClass = arrayByClass.concat(getElementsByClassName(className, node.children[i]));
    }
  }
  return arrayByClass;
};
