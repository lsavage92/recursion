// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className){
  //Iteratively works for every example except for the last one with the containing divs
  //need to add a check to see if there are more childNodes. if childNodes[0] === undefined there are no more. This is why we need recursion.
  var body = document.body;
  var childNodes = document.body.childNodes;
  var results = [body];
  for(var i = 0; i < childNodes.length; i++){
    if(childNodes[i].classList != undefined){
        for(var j = 0; j < childNodes[i].classList.length; j++){
            if(childNodes[i].classList[j] === body.className){
                results.push(childNodes[i]);
            }
        }
    }
  }

  return results;
};
