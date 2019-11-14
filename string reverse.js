str="hai iam gautham"

var str1=str.split("");
var rev=str1.reverse();
var  joinstr=rev.join("")
console.log(joinstr)

///output:: mahtuag mai iah

var str1=str.split(" ");
var rev=str1.reverse();
var  joinstr=rev.join(" ")
console.log(joinstr)

///output:: gautham iam hai

var str1=str.split(" ");
var res=[]
for (i=0; i<str1.length; i++){
	
	var revword=str1[i].split("").reverse().join("");
	console.log(revword)
	res.push(revword)
}
var final_ans=res.join(" ")
console.log(final_ans)
//output===iah mai mahtuag