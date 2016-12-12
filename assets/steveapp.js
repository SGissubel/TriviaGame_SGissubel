$(document).ready(function(){
	$('body').css('background-image', 'url('+"images/background.JPG"+')');

//Will increment this to do the next question. 	
var newQuest = 0;

var timer = 25;

var number = timer;



//Question array, holds all the questions. 
var questions = [{
		question: 'When was the first Harley Davison built and made available to the public?',
		response: [1903, 1905, 1908, 1889], 
		actAns: 1903,
		ansInfo: "In 1903, William S. Harley and Arthur Davidson make available to the public the first production Harley-Davidson motorcycle. The bike was built to be a racer, with a 3-1/8 inch bore and 3-1/2 inch stroke. The factory in which they worked was a 10 x 15-foot wooden shed with the words \"Harley-Davidson Motor Company\" crudely scrawled on the door. Arthur's brother Walter later joins their efforts.",
		image: $("<img>").attr("src", "images/backgroundTwo.png")	

	},
	{
		question: 'Three brother and their friend created Harley Davidson from the ground up. Who is the person responsible for drawing up the blueprints for the first Harley Davidson motorized vehicle?',
		response: ["Arthus Davidson", "Walter Davidson", "William S. Harley", "Harley Allen"],
		actAns: "William S. Harley",
		ansInfo: "In 1901, William S. Harley, age 21, completes a blueprint drawing of an engine designed to fit into a bicycle."
	},
	{
		question: 'Who was the first woman recorded to have ridden a Harley Davidson motorcycle?',
		response: ["Adison Harley", "Janet Macintire", "Janet Davidson"],
		actAns: "Janet Davidson",
		ansInfo: "The first woman considered to have ridden a Harley was Janet Davidson. Janet is an aunt of the Davidson boys and helped out with pin striping and painting the letters on the motorcycles. Speculation is, one way or the other she climbed onto one of the firsts Harleys making her the first ever woman to ride one; however, it was never confirmed if the motor was running or not. "
	},
	{
		question: 'What is the most expensive Harley ever made?',
		response: ["CVO Street Glide", "VRSC V-Rod", "CVO Ultra Class Electra Glide", "Dyna Wide Glide"],
		actAns: "CVO Ultra Class Electra Glide",
		ansInfo: "Harley's best touring motorcycle gets the benefit of Project Rushmore upgrades this year, and the Custom Vehicle Operations (CVO) version emerges with a plethora of custom finishes and options. The CVO Road Glide Ultra is the first production H-D to crack the $40,000 barrier."
	},
	{
		question: 'Harley Davidson also built bicycles for a while in the early 1920\'s.',
		response: ["True", "False"],
		actAns: "True",
		ansInfo: "Harley-Davidson launched a line of bicycles in 1917 in hopes of recruiting customers for its motorcycles. Besides the traditional diamond frame men's bicycle, models included a step-through frame 3-18 \"Ladies Standard\" and a 5-17 \"Boy Scout\" for youth. The effort was discontinued in 1923 because of disappointing sales. \nThe bicycles were built for Harley-Davidson in Dayton, Ohio, by the Davis Machine Company from 1917 to 1921, when Davis stopped manufacturing bicycles."
	},	
	{
		question: 'In what year did Harley Davidson move to a factory for a larger production line?',
		response: ["1903", "1906", "1910", "1914"],
		actAns: "1906",
		ansInfo: "In 1906, Harley and the Davidson brothers built their first factory on Chestnut Street (later Juneau Avenue), at the current location of Harley-Davidson's corporate headquarters. The first Juneau Avenue plant was a 40 ft × 60 ft (12 m × 18 m) single-story wooden structure. The company produced about 50 motorcycles that year. Years later the original shed, where they produced the first few bikes, was taken to the Juneau Avenue factory where it would stand for many decades as a tribute to the Motor Company's humble origins until it was accidentally destroyed by contractors cleaning the factory yard in the early 1970s."
	},
	{
		question: 'Who was, and arguably still is, one of Harley\'s biggest competitors in the early stages of the company?',
		response: ["Hero Motorcycles", "BMW Motorcycles", "Honda Motorcycles", "Indian Motorcycles"],
		actAns: "Indian Motorcycles",
		ansInfo: "Despite its demise in the 1950's, and subsequent rebirth in the early 2000's, Indian Motorcycles was originally one of Harley Davidson's greatest competitors.  Indeed, the competition between Indian and Harley-Davidson both on and off the race track was fierce and led to many fisticuffs in its day."
	},
	{
		question: 'Harley is most notable for which of the following styles of customization?',
		response: ["The Chopper", "The Enduro", "The Cruiser", "The Cafe Racer"],
		actAns: "The Chopper",
		ansInfo: "Upon returning from World War II, soldiers seemed dissatisfied with the motorcycles that were being built by Harley-Davidson and Indian. The bikes they had rode in Europe were lighter, sleeker, and were much more fun to ride. These vets started to hang out with other ex-soldiers to relive some of the camaraderie they had felt in the service. These groups of buddies realized that their motorcycles needed changes that Harley was not providing. These new \"bikers\" (another new term at the time) started their \"chopping\" by removing or shortening (bobbing) the fenders on their bikes. This made the bikes look cool and uncluttered. They originally called the new chopped bikes \"Bobbers\". The bikes kept evolving through the 60's and in the 70's and they started to call them \"Choppers\". In 1969 the movie \"Easy Rider\" was released which brought the Chopper into the public eye. That movie set into motion the wave of cool Choppers and Chopper builders that we see today. People wanted a Chopper and nobody was building them so they had to go build them themselves."
	},	
	{
		question: 'Which of the following is the common measurement of Harley Davidson engines?',
		response: ["Ram", "Horsepower", "Cubic Centimeters", "Cubic Inches"],
		actAns: "Cubic Inches",
		ansInfo: "Cubic inches is often a measurement used in North America to indicate the displacement of an engine block, whereas most other countries use cubic centimeters. Cubic centimeters and cubic inches are both measurements used to define the displacement (or overall size) of the block of an engine. If the engine block was submerged in a pool of water, it would displace 88 cubic inches, or 1442.1 cubic centimeters of water. Cubic inches were originally used to measure most Chevy big block engines and also became the standard of measurement for Harley Davidson engines."
	},	
];

$('button').one('click', function (){
	generateQuestion();
	$(this).hide();
})

function generateQuestion(){
	$('button').one('click', function (){
		generateQuestion();
		$(this).hide();
	})
	if(newQuest < questions.length){
		//Accesses the one div, and replaces all the html inside with a question, based on where we are in the array. 
		$(".one").html("<div class=question>"+questions[newQuest].question+"</div>");
		$(".two").empty();
		$(".four").html(number = 25);
		displayNumber();
		$(".four").html(runTimer);
		for(var i = 0; i<questions[newQuest].response.length; i++){
			$(".two").append("<div class=\"answer\" data-responses=\""+questions[newQuest].response[i]+"\">"+questions[newQuest].response[i]+"</div>");

		}
			$('body').css('background-image', (questions[newQuest].image[i]));

	}
	else{
		$('.one').html("Game over." + "<br/>" + "Thanks for Playing!");
		$('.two').hide();
		$('.three').hide();
		$('.four').hide();
	}

}
function displayNumber(){
	$('.four').html('<p>Time Remaining: '+ number +'</p>');
		
}
function runTimer(){
	counter = setInterval(decrement, 1000);
}
function decrement(){
	displayNumber();
	number--;
	displayNumber();
		 if (number === 0){
		$('.two').html("TIMES UP! The Answer is " + questions[newQuest].actAns + '<p>' + questions[newQuest].ansInfo + '</p>');
		stop();
		$(".four").empty();
		setTimeout(function() {
		newQuest++;
		generateQuestion();
		}, 10000);
	}
	// if(number == 0){
	// 	stop();
	// }
}
function stop(){
	clearInterval(counter);
}


//This jquery element is used to take in a click within the two div on a class called answer, and then give you the value, so that you may later compare to the correct answer. 
$(".two").on("click",".answer", function(){
	//Grabs the answer that you have clicked, then assigns it to the answer variable. 
	var answer = $(this).attr("data-responses");
	if(answer == questions[newQuest].actAns){
		$('.two').html("Correct!" + '<p>' + questions[newQuest].ansInfo + '</p>');
		stop();
		$(".four").empty();
		setTimeout(function() {
		newQuest++;
		generateQuestion();
		}, 10000);

	}
	else{

		$('.two').html("Incorrect! The answer is: " + questions[newQuest].actAns + '<p>' + questions[newQuest].ansInfo + '</p>');
		stop();
		$(".four").empty();
		setTimeout(function() {
			newQuest++;
			generateQuestion();
		}, 10000);
	}
});

//This is only executed on document ready. Never again after, any time you gen a question it has to be inside a function or jquery. 

});






//jkljkj