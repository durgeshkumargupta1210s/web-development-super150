



let canvas=document.querySelector('canvas');
// brush==context;

let ctx=canvas.getContext('2d');

// solid rectangle
ctx.fillStyle='red'// color change  from black
ctx.fillRect(100,200,150,50);// x.y.w.h


// hollow rectange
ctx.strokeStyle='black'
ctx.strokeRect(100,150,50,40)

// path

ctx.beginPath();
ctx.moveTo(40,40)
ctx.lineTo(100,120)
ctx.lineTo(300,220)
ctx.lineTo(90,20)
ctx.stroke();
ctx.closePath();

// drawing text
ctx.font='80px monospace '
ctx.fillStyle='yellow'
ctx.fillText('durgesh',149,150)















