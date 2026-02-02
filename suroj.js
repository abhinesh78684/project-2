let canvas= document.getElementById("canvas")
let c=canvas.getContext("2d")

canvasWidth=window.innerWidth
canvasHeight=window.innerHeight
draw(){
     c.beginPath()
     c.fillRect(120,120,40,40)
     c.fillStyle="red"
} 
 
     function animate(){
        c.clearRect(0,0,canvas.width,canvas.height)
        
        draw();
     }