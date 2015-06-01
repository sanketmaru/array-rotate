var expect = require("chai").expect;
var rotateArray = require("./");


describe("test array length", function(){

	it("should have length more than 1", function(){
		var arr = [1,2,3];
		expect(arr.length).to.be.at.least(1);
	});


	/*it("should reverse array from n position", function(){

		var arr = [1,2,3,4,5,6];
		var position = 2;

		var arrayLength = arr.length-1; //5
		var arrayLengthToReverse = arr.length-position;//4
		var startArrayLength = arrayLengthToReverse;

		var tempArr = [];
		for(var i=arrayLength;i >= startArrayLength;i--){
			tempArr[arrayLengthToReverse] = arr[i];
			arrayLengthToReverse++;
		}

		expect(tempArr[5]).to.equal(5);

	});*/


	it("should rotate array from 2 position", function(){

		var arr = rotateArray.createArray(1,2,3,4,5,6);
		var position = 2;
		var newArr = rotateArray.rotateByLast(arr, position);

		console.log("new array is" + newArr);

		expect(newArr[0]).to.equal(5);
		expect(newArr[1]).to.equal(6);

	});

});



