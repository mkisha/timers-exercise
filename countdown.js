function countDown(num){
	const count = setInterval (function(){
	num--;
 
if (num <= 0) {
	clearInterval(count);
	console.log("Done");
}
else {
	console.log(num);
    }
}, 1000)
	}
