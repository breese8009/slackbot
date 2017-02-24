module.exports=function(robot) {

	robot.hear(/Trump/,function(res){

		var randomNum=Math.floor(Math.random()*5);

		var gif1='http://giphy.com/gifs/drawing-donald-trump-kat-l3q2TGhB8qZhs1tny';
		var gif2= "http://giphy.com/gifs/crying-stop-qPRadyDnFaKFW";
		var gif3= "http://giphy.com/gifs/snl-saturday-night-live-season-42-26xBMgX4QRreXTAoE";
		var gif4= "http://giphy.com/gifs/donald-trump-lewd-watter-bottle-xT9DPCinBMPhFFW1HO";
		var gif5= "http://giphy.com/gifs/deal-with-it-donald-trump-make-america-great-again-jSB2l4zJ82Rvq";

		var array=[gif1, gif2, gif3, gif4, gif5];

		return res.send(array[randomNum]);

	});

	robot.hear(/Primitive Data/i, function(msg){
		msg.send("https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275874?start=45");
	});

	robot.hear(/Variables/i, function(msg){
		msg.send("https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275880?start=0");
	});

	robot.hear(/Arrays/i, function(msg){
		msg.send("https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275884?start=0");
	});

	robot.hear(/Objects/i, function(msg){
		msg.send("https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275888?start=0");
	});

	robot.hear(/Functions/i, function(msg){
		msg.send("https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275892?start=1155");
	});

	robot.hear(/Constructors/i, function(msg){
		msg.send("https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275896?start=0");
	});

	robot.hear(/Scoping/i, function(msg){
		msg.send("https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275900?start=0");
	});

	robot.hear(/If/i, function(msg){
		msg.send("https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275904?start=510");
	});

	robot.hear(/For loops/i, function(msg){
		msg.send("https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4275906?start=0");
	});

	robot.hear(/List/i, function(msg){
		msg.send("https://www.udemy.com/javascript-essentials/learn/v4/content");
	});

	robot.hear(/Help/i, function(msg){
		msg.send("Key words are--> Primitive Data, Variables, Arrays, Objects, Functions, Constructors, Scoping, If, For loops, List-A complete list of all javascript video tutorials");
	});

};

