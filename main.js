nosex=0;
nosey=0;

function preload(){

    clownNose=loadImage('https://i.postimg.cc/sXNLKrq1/R.png');


}

function setup(){


canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);



}

function draw(){

image(video,0,0,400,400);
fill(255,0,0);
stroke(255,0,0);

image(clownNose,nosex,nosey,50,50);

}



function take_snapshot(){

save('filter.png');

}

function modelLoaded(){


console.log('poseNet is loaded');



}

function gotPoses(results){

if(results.length>0){

console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nose x = "+nosex);
console.log("nose y = "+nosey);
};

}


