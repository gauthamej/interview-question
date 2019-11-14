var str=prompt()
var vow=["a","e","i","o","u"]
var vowcount=0;
var conscount=0
for (i=0; i<str.length; i++){
	var ans=vow.includes(str[i])
	if(ans){
		vowcount+=1
	}
	else{
		conscount+=1
	}
}
console.log(vowcount);
console.log(conscount);