status1 = false;
function setup()
{
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture();
    video.hide();
}

function draw()
{
    image(video, 0, 0, 450, 400);
}

function start()
{
    od = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded()
{
    console.log("Model loaded");
    status1 = true;
}

