var player;

function onYouTubeIframeAPIReady() {
     player = new YT.Player('video-foreground', {
     videoId: 'ddFvjfvPnqk', // YouTube Video ID
     playerVars: {
     autoplay: 1, // Auto-play the video on load
     controls: 0, // Show pause/play buttons in player
     showinfo: 0, // Hide the video title
     modestbranding: 1, // Hide the Youtube Logo
     loop: 1, // Run the video in a loop
     fs: 0, // Hide the full screen button
     cc_load_policy: 0, // Hide closed captions
     iv_load_policy: 3, // Hide the Video Annotations
     autohide: 0, // Hide video controls when playing
     playlist: 'ddFvjfvPnqk'
 },
 events: {
     onReady: function(e) {
     e.target.mute();
     }
 }
 });
}

var questions = [
	    {
	          prompt: "What color are apples?\n(a) Red/Green\n\ (b) Purple\n(c) Orange",
	          answer: "a"
	    },
	    {
	         prompt: "What color are Bananas?\n(a) Teal\n\ (b) Magenta\n(c) Yellow",
	         answer: "c"
	    },
	    {
	         prompt: "What color are strawberries?\n(a) Yellow\n\ (b) Red\n(c) Blue",
	         answer: "a"
	    }
	];
function playQuiz(name){
	var score = 0;
	
	window.prompt("Hi " + name + " welcome to my quiz");
	
	for(var i = 0; i < questions.length; i++){
	    var response = window.prompt(questions[i].prompt);
	    if(response == questions[i].answer){
	         score++;
	         alert("Correct!");
	    } else {
	         alert("WRONG!");
	    }
	}
	alert("you got " + score + "/" + questions.length);
	}
