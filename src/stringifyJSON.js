// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Check for undefined parameter
  if(obj === undefined){
  	return;
  }

  var results;
  // Check to see if the type is object
  if(typeof obj === "object"){
  	// null check
  	if(obj === null){
  		return "null";
  	}
  	//stub for handling objects. Will use handleArray() function inside
  	results = handleObject(obj);
  }
  else{
  	//stub for handling primative values
  	results = handlePrimative(obj);
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

//recursive
function handleArray(arr){
	if(arr.length === 0){
		return ']';
	}
	else{
		if(Array.isArray(arr[0])){
			if(arr.length === 1){
				return handleObject(arr.shift()) + handleArray(arr);
			}
			else{
				return handleObject(arr.shift()) + ',' + handleArray(arr);
			}
		}
		if(arr.length === 1){
			return handlePrimative(arr.shift()) + handleArray(arr);
		}
		else{
			return handlePrimative(arr.shift()) + ',' + handleArray(arr);
		}
	}

}
//recursive
function handleObject(obj){
	if(Array.isArray(obj)){
		return '[' + handleArray(obj);
	}
};