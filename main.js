function preload() {

}

function setup() {
    canvas = createCanvas(800, 550);
    canvas.position(350, 75);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 125, 75, 550, 400);
    circle(30, 30, 40);
    fill("blue");
    circle(30, 520, 40);
    fill("orange");
    circle(770, 30, 40);
    fill("red");
    circle(770, 520, 40);
    fill("green");


    rect(50, 20, 700, 17);
    
    rect(50, 510, 700, 17);
    
    rect(22, 50, 17, 450);
    
    rect(762, 50, 17, 450);
    
}

function take_snapshot() {
    save('PersonalizedImageFrame.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}