//NOTE!!!!NOTE!!!!!!
//IF I GET OBJECT OBJECT----------I CAN USE STRINGIFY TO RECTIFY THIS!!!!!!




var newQuest = 0;
var questions = [{
		question: 'what?',
		response: [1 , 2, 3], 
		actAns: 'Yes',
	},
	{
		question: 'who?',
		respOne: '1',
		respTwo: '2',
		actAns: 'No',
	},
	{
		question: 'where?',
		respOne: '1',
		respTwo: '2',
		respThree: '3',

		actAns: 'maybe',


	}];

// questions[newQuest]

// on click of choices  (like onclick of choice1&2 from rpg)
// 	numQuest++;
// 	set time out
// 		questions[newQuest]

$(document).ready(function(){



// var questions = [
// 	{
// 		question : "1+1",
// 		choices: [1, 2, 3, 4],
// 		correctChoice: 1
// 	},
// 	{
// 		question: "2+3",
// 		choics: [6,7,8,5],
// 		correctChoice: 3
// 	}
// ]



	$(window).load(function(){
			$('.one').html(questions[newQuest].question);
			for(var i = 0; i < questions.length; i++){
				$('.two').append('<p>' + (i+1) + questions[i].response + '</p>');
				//need to separate the reponse answers into different lines and with separate data attributes.
			}
		


		// questions[newQuest]

// on click of choices  (like onclick of choice1&2 from rpg)
// 	numQuest++;
// 	set time out
// 		questions[newQuest]





		// $('.one').html(questions.qOne.question);
		// $('.two').html('<a>' + questions.qOne.respOne +'</a>' + '<p>'+questions.qOne.respTwo+'</p>' + '<p>'+questions.qOne.respThree+'</p>');
	
			// if the value of? data-attribute of correct one is clicked 
			// 	display correct (set data attributes in a for loop for each)

	//can I add a class attr to each for an onclick later?  same one for every question responses. 1 2 3 
		// if (if data-attribute(or this) === answer){ } ^^^^ see above













	})//end window.load














});

// function setGame(){
// 	$('.one').text = newQuest++;
// 	console.log(questions.qOne.question);
// }







// logo
// don't-randomize...same questions will pop up more than once. 
// Question and first 3 guess-answers onto the page.




//what should I make each possible response? <a>? <p>? if so, assigning a class for each? Appending? On.click each? appending a response with a specific class. 
