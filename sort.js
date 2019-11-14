var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7,7,77];
var sorted_arr = arr.sort((a,b) => {
	return(a-b)
}); 
console.log(sorted_arr)


var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7,7,77];
var sorted_arr = arr.sort((a,b) => {
	return(b-a)
}); 
console.log(sorted_arr)
