function randomGame(num) {
	let randomNumber = Math.random();
	let numOfTries = 0;
	
	let counter = setInterval(function(){
     if (randomNumber <= 0.75){
		 return numOfTries++;
	 }
	 else {
      clearInterval(counter);
	  console.log(numOfTries);
	 }
	}, 1000)
	
}
