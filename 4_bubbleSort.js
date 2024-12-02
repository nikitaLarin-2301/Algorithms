const array = [ 1, 15, 2, 14, 3, 13, 4, 12, 5, 11, 6, 10, 7, 9, 8 ];

function bubbleSort(arr) {
	for ( let i = 0; i < arr.length; i++ ) {
		for ( let j = 0; j < arr.length; j++ ) {
			if ( arr[j] > arr[j + 1]) {
				const tmp = arr[j]
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
	return arr
}

console.log(bubbleSort(array));