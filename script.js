function firstChar(text) {
  // your code here
	let ans="";
	if(text.length===0||(text.length===1 && text.charAt(0)===" ")) return ans;
	for(let i=0;i<text.length;){
		if(text.charAt(i)===" "){
			i++;
		}
		else{
			return text.charAt(i);
		}
	}
}
// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
