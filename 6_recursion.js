const array = [ 1, 2, 3, 4, 5 ];

function sum( arr ) {
	if ( arr.length < 2 ) {
		return arr[ 0 ] || 0
	}
	return arr[ 0 ] + sum( arr.slice( 1 ) )
}

console.log( sum( array ) )

function countNumbers( arr ) {
	if ( !arr.length ) {
		return 0
	}
	return 1 + countNumbers( arr.slice( 1 ) )
}

console.log( countNumbers( array ) )

function biggerNumber( arr ) {
	if ( !arr.length ) {
		return 0
	}
	const number = biggerNumber( arr.slice( 1 ) )
	return arr[ 0 ] > number ? arr[ 0 ] : number
}

console.log( biggerNumber( array ) )

const array1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];

function recursionBinarySearch( arr, item, left, right ) {
	if ( left > right ) {
		return -1
	}
	let middle = Math.floor( ( left + right ) / 2 );
	if ( arr[ middle ] === item ) {
		return middle;
	}
	if ( arr[ middle ] > item ) {
		return recursionBinarySearch(arr, item, left, middle - 1);
	} else {
		return recursionBinarySearch(arr, item, middle + 1, right);
	}
}

console.log(recursionBinarySearch(array1, 7, 0, array1.length))