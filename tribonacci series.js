var arr=[0,1,2]
for(i=3; i<8; i++){
	arr.push(arr[i-3]+arr[i-2]+arr[i-1])
}
console.log(arr)