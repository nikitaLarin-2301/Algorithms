const array = [ 1, 15, 2, 14, 3, 13, 4, 12, 5, 11, 6, 10, 7, 9, 8 ];

function quickSort( arr ) {
	if ( arr.length < 2 ) {
		return arr
	}
	const less = [];
	const greater = [];

	const middle = Math.floor( arr.length / 2 );
	const midItem = arr[ middle ]

	for ( let i = 0; i < arr.length; i++ ) {
		if ( i === middle ) {
			continue
		}
		if ( arr[ i ] < midItem ) {
			less.push( arr[ i ] );
		} else {
			greater.push( arr[ i ] );
		}
	}

	return [ ...quickSort( less ), midItem, ...quickSort( greater ) ]
}

console.log( quickSort( array ) );