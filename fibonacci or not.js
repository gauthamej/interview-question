var input=parseInt(prompt())
var arr=[0,1]
for(i=2; i<input+1; i++){
	arr.push(arr[i-2]+arr[i-1])
}
var h=arr.includes(input);
if (h){
	console.log("yes")
}
else{
console.log("NO")
}