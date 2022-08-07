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

    if (status1 != "")
    {
        od.detect(video, gotResult);
        document.getElementById("status").innerHTML = "Objects Detected";
        document.getElementById("num_obj").innerHTML = objects.length;

        for (i=0; i<objects.length; i++)
        {
            n = objects[i].label;
            per = Math.floor(objects[i].confidence*100);
            fill('red');
            text(n + " " + per + " %", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            if (objects[i].label = obj_detect)
            {
                video.stop();
                od.detect(gotResult);

                document.getElementById("status").innerHTML = obj_detect + " has Been Detected";
            }
        }
    }
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    } else 
    {
        console.log(results);
        objects = results;
    }
}

function start()
{
    od = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
    obj_detect = document.getElementById("obj_name.").value;
}

function modelLoaded()
{
    console.log("Model loaded");
    status1 = true;
}

