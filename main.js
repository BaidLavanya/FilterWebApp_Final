noseX = 0;
noseY = 0;

function preload() { 
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(400,320);
    canvas.center();
    cam = createCapture(VIDEO);
    cam.hide();
    cam.size(400,320);
    poseNet = ml5.poseNet(cam, modelLoaded);
    poseNet.on('pose' , gotPose);
}  

function modelLoaded() {
    console.log("PoseNet Model Loaded.");
}

function gotPose(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 23;
        noseY = results[0].pose.nose.y - 5;
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
    }
}

function draw() { 
    image(cam, 0, 0, 400, 320);
    image(mustache, noseX, noseY, 50, 40);
}

function takeSnap() {
    save('myImage.png');
}