var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        block_image_objects=Img;
        block_image_objects.scaleToWidth(700);
        block_image_objects.scaleToWidth(510);
        block_image_objects.set({
            top: 0,
            left: 0
        });
        canvas.add(block_image_objects);
    });
	
}

function playSound(){
	x.play();
}

