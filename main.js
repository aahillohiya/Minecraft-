var canvas = new fabric.Canvas("myCanvas");

player_object = ""
block_image_object = ""

block_width = 30;
block_height = 30;

player_X = 10;
player_Y = 10;

function Player_update() {
    fabric.Image.fromURL("player.png", function (Img)
    {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_Y , left:player_X
        });
        canvas.add(player_object);
    });
}

function new_image (get_image) {
    fabric.Image.fromURL(get_image, function (Img)
    {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        block_image_object.set({
            top:player_Y , left:player_X
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode; 
    console.log(keyPressed);

    if (e.shiftKey && keyPressed == "80") {
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("Current_Width").innerHTML = block_width;
        document.getElementById("Current_Height").innerHTML = block_height;
    }

    if (e.shiftKey && keyPressed == "77") {
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("Current_Width").innerHTML = block_width;
        document.getElementById("Current_Height").innerHTML = block_height;
    }

    if (keyPressed == "38") {
        UP();
    }
    if (keyPressed == "40") {
        DOWN();
    }
    if (keyPressed == "37") {
        LEFT();
    }
    if (keyPressed == "39") {
        RIGHT();
    }

    if (keyPressed == "87") {
        new_image("wall.jpg");
    }
    if (keyPressed == "89") {
        new_image("yellow_wall.png");
    }
    if (keyPressed == "85") {
        new_image("unique.png");
    }
    if (keyPressed == "84") {
        new_image("trunk.jpg");
    }
    if (keyPressed == "82") {
        new_image("roof.jpg");
    }
    if (keyPressed == "76") {
        new_image("light_green.png");
    }
    if (keyPressed == "68") {
        new_image("dark_green.png");
    }
    if (keyPressed == "67") {
        new_image("cloud.jpg");
    }
    if (keyPressed == "71") {
        new_image("ground.png");
    }
}
 function UP() {
    if (player_Y >= 0) {
        player_Y = player_Y - block_height ;
        canvas.remove(player_object);
        Player_update();
    }
 }
 function DOWN() {
    if (player_Y <= 600) {
        player_Y = player_Y + block_height ;
        canvas.remove(player_object);
        Player_update();
    }
 }
 function LEFT() {
    if (player_X >= 0) {
        player_X = player_X - block_width ;
        canvas.remove(player_object);
        Player_update();
    }
 }
 function RIGHT() {
    if (player_X <= 1400) {
        player_X = player_X + block_width ;
        canvas.remove(player_object);
        Player_update();
    }
 }