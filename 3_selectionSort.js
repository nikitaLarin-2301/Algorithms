const array = [ 1, 15, 2, 14, 3, 13, 4, 12, 5, 11, 6, 10, 7, 9, 8 ];

function selectionSort( arr ) {
	for ( let i = 0; i < arr.length; i++ ) {
		let minIndex = i;
		for ( let j = i + 1; j < arr.length; j++ ) {
			if ( arr[ j ] < arr[ minIndex ] ) {
				minIndex = j
			}
		}
		const temp = arr[ i ];
		arr[ i ] = arr[ minIndex ];
		arr[ minIndex ] = temp
	}
	return arr
}

console.log(selectionSort(array));