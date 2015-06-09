// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Check for undefined parameter
  if(obj === undefined){
  	return;
  }

  // Beginning of string
  var results = "";

  //Handling Arrays
  if(Array.isArray(obj)){
    results += "["; // Formatting
    for(var i = 0; i < obj.length; i++){ //Loop through every element and add them to the string with a comma except the last element.
        if(i < obj.length - 1){
            results += stringifyJSON(obj[i]) + ",";
        }
        else{
            results += stringifyJSON(obj[i]);
        }
    }
    results += "]"; //End of formatting
    return results;
  }
  // Check to see if the type is object
  if(typeof obj === "object"){
  	if(obj === null){ // null check
  		return "null";
  	}
    else{
      var numProps = countProperties(obj); //Keep count of properties so we know when we reached the last property in the loop
      var count = 0;
      results += "{"; // Formatting
      for(var key in obj){ // loop through all keys
        if(typeof obj[key] === "function" || typeof obj[key] === "undefined"){ // if property is function or undefined, add nothing
          results = results;
        }
        else if(count === numProps - 1){ // adds final property to string 
          results += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
        }
        else{ // adds all properties to the string except for the last property
          results += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
        }
        count++;
      }
      results += "}"; // End of formatting
    }
  }
  else{
  	//handles primative values which stringifies all elements in an array, primatives alone or values of the key-value pairs in objects
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