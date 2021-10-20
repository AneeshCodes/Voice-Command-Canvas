
drawCircle = ""
drawRect = ""

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition()

function start(){
  document.getElementById('status').innerHTML = "System is listening. Please Speak Now."
  recognition.start()
}
recognition.onresult = function(event){
  console.log(event)
  content = event.results[0][0].transcript
  document.getElementById('status').innerHTML = "Speech has been recognized as " + content
  if(content == "Circle"){
    x = Math.floor(Math.random()*800)
    y = Math.floor(Math.random()*500)
    document.getElementById('status').innerHTML = "Started Drawing Circle..."
    drawCircle = "set"
  }
  if(content == "rectangle"){
    x = Math.floor(Math.random()*800)
    y = Math.floor(Math.random()*500)
    document.getElementById('status').innerHTML = "Started Drawing Rectangle..."
    drawRect = "set"
  }
  
}

function preload(){

}

function setup(){
  canvas = createCanvas(900, 600);
}

function draw(){
  if(drawCircle == 'set'){
    circle(x,y, 100);
    document.getElementById('status').innerHTML = "Circle is Drawn"
    drawCircle = ""
  }
  if(drawRect == 'set'){
    rect(x,y, 100, 200);
    document.getElementById('status').innerHTML = "Rectangle is Drawn"
    drawRect = ""
  }
}