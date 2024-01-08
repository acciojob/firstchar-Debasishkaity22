function firstChar(text) {
  // your code here
	if(text==="") return "";
	else{
	let ans="";
	for(let i=0;i<text.length;i++){
		if(text.charAt(i)!=" "){
			ans+=text.charAt(i);
			break;
		}
	}
		return ans;
	}
}
// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));