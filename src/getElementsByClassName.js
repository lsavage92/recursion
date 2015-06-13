// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className){
  //var currentEle = document.body;
  var results = [];
  var node = document.childNodes;
  
    function walkThatDom(node){
        for(var i = 0; i < node.length; i++){
            if(node[i].classList && node[i].classList.contains(className)){
                results.push(node[i]);
            }
            if(node[i].childNodes.length){
                walkThatDom(node[i].childNodes);
            }
        }
    }

    walkThatDom(node);
    return results;
};
