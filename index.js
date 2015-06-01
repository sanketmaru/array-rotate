
exports.createArray = function(){
	var collection = new MyArray(arguments);
	return collection;
};

exports.rotateByLast = function(array, positions){

	var arrayLength = array.length - 1;
	var midElement = array.length - positions;

	var tempArr = [];

	tempArr = array.reverse(midElement, arrayLength);
	tempArr = array.reverse(0, midElement-1, tempArr);
	tempArr = tempArr.reverse(0, tempArr.length);

	return tempArr;
};


function MyArray(){

	var customArray = Object.create(Array.prototype);

	customArray = Array.apply(this, arguments[0]);

	customArray.reverse = function(startIndex, endIndex, tempArr){
		var arrayLengthToReverse = startIndex;
		var tempArr = tempArr || [];
		for(var i=endIndex;i >= startIndex;i--){
			tempArr[arrayLengthToReverse] = this[i];
			arrayLengthToReverse++;
		}
		return tempArr;
	};

	return customArray;
}
