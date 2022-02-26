noseX="";
noseY="";


function preload() {
	world_start = loadSound("SuperMarioBros.mp3");
	jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	goomba = loadSound("goomba.wav");
	gameOver = loadSound("gameover.wav");
	marioDie = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video= createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_Console");

	poseNet= ml5.poseNet(video, modalLoaded);
	poseNet.on("pose", gotPoses);

}

function draw() {
	game()
}

function scrollUp(){
	window.scrollTo(0,0);
}



function modalLoaded(){
	console.log("modalLoaded");
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX = floor(results[0].pose.nose.x);
		noseY = floor(results[0].pose.nose.y);

	}
}


