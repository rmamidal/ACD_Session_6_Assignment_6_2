var numArr = [90,705,600]; // Array to store Numbers.
var greatestNo = null; // Variable to store greatest number

// for in loop to iterate through the numbers of array.
for (var num in numArr) {
	// Checks initial value of greatest number.
	if(greatestNo == null) { 
		greatestNo = numArr[parseInt(num)];
	}
  
	// Compares greatest number with next array element.
  if(greatestNo < numArr[parseInt(num)+1]) { 
		greatestNo = numArr[parseInt(num)+1];
  }

}

console.log(greatestNo); // Prints greatest number.