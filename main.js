function preload () {
}
function setup () {
    canvas = createCanvas (640 , 480 )
    canvas.position (110 , 250 )
video = createCapture (VIDEO)
 video.hide ()
 corfiltro = ''
}
function draw (){
    image(video , 320 , 240 , 400 , 200  )
    circle(600, 30, 20);
    circle(30, 30, 20);
    circle(30, 450, 20);
    circle(600, 450, 20);
    rect(30, 20, 570,20);
    rect(30, 440, 570,20);
    
    tint (corfiltro)
}
function takeSnapshot () {
    save ('foto.png')
}
function aplicar (){
    corfiltro = document.getElementById ('cor').value
}