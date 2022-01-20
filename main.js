function preload() {

}

function setup() {
createCanvas(0, 0, 300, 300 );
}

function draw(){
    circle(0, 0, 30);
    circle(-300, 0, 30);
    circle(0, -300, 30);
    circle(-300, -300, 30);
    image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save('Filter.png');
    
 }
 
 function modelLoaded() {
     console.log('poseNet is initialized.');
 }
 
 function gotPoses(results) {
     if (results.length>0) {
         console.log(results)
         console.log("Left Ear x =" + results[0].pose.nose.x);
         console.log("Left Ear y =" + results[0].pose.nose.y);
         console.log("Right Ear x =" + results[1].pose.nose.x);
         console.log("Right Ear y =" + results[1].pose.nose.y);
         console.log("Nose x =" + results[2].pose.nose.x);
         console.log("Nose y =" + results[2].pose.nose.y);
         console.log("Left Eye x =" + results[3].pose.nose.x);
         console.log("Left Eye y =" + results[3].pose.nose.y);
         console.log("Right Eye x =" + results[4].pose.nose.x);
         console.log("Right Eye y =" + results[4].pose.nose.y);
         console.log("Left Arm x =" + results[5].pose.nose.x);
         console.log("Left Arm y =" + results[5].pose.nose.y);
         console.log("Right Arm x =" + results[6].pose.nose.x);
         console.log("Right Arm y =" + results[6].pose.nose.y);
         console.log("Left Cheek x =" + results[7].pose.nose.x);
         console.log("Left Cheek y =" + results[7].pose.nose.y);
         console.log("Right Cheek x =" + results[8].pose.nose.x);
         console.log("Right Cheek y =" + results[8].pose.nose.y);
         
     }
 }