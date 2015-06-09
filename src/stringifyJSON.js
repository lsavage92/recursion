// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Check for undefined parameter
  if(obj === undefined){
  	return;
  }

  var results = "";

  if(Array.isArray(obj)){
    results += "[";
    for(var i = 0; i < obj.length; i++){
        if(i < obj.length - 1){
            results += stringifyJSON(obj[i]) + ",";
        }
        else{
            results += stringifyJSON(obj[i]);
        }
    }
    results += "]";
    return results;
  }
  // Check to see if the type is object
  if(typeof obj === "object"){
  	// null check
  	if(obj === null){
  		return "null";
  	}
    else{
      var numProps = countProperties(obj);
      var count = 0;
      results += "{";
      for(var key in obj){
        if(typeof obj[key] === "function" || typeof obj[key] === "undefined"){
          results = results;
        }
        else if(count === numProps - 1){
          results += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
        }
        else{
          results += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
        }
        count++;
      }
      results += "}";
    }
  }
  else{
  	//handles primative values
  	results += handlePrimative(obj);
  }

  return results;
};

// Utility functions
function handlePrimative(primative){
	if(typeof primative === "string"){
		return '"' + primative + '"';
	}
	else{
		return primative.toString();
	}
}

function countProperties(obj){
  var count = 0;
  for(var key in obj){
    count++;
  }
  return count;
}