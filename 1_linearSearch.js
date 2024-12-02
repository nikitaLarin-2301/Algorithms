const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];

function linearSearch(arr, item) {
	for ( let i = 0; i < arr.length; i++ ) {
		if ( arr[i] === item ) {
			return i
		}
	}
}

console.log(linearSearch(array, 15))