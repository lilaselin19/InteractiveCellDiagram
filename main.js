var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//cytoplasm
ctx.fillStyle = "#fff2d3";
roundRect(ctx, 50, 100, 800, 300, 100, 1);

//chromatin
var img = new Image();
img.onload = function() {
    ctx.drawImage(img, -120, -375, 1500, 1500);
}
img.src = "IconLibrary/chromatin.svg";

//plasmid
var img2 = new Image();
img2.onload = function() {
    ctx.drawImage(img2, 175, 100, 100, 100);
    ctx.drawImage(img2, 250, 300, 100, 100);
    ctx.drawImage(img2, 550, 320, 100, 100);
    ctx.drawImage(img2, 700, 200, 100, 100);
}
img2.src = "IconLibrary/plasmid.svg";

//ribosome
var img3 = new Image();
img3.onload = function() {
    ctx.drawImage(img3, 250, 225, 25, 25);
    ctx.drawImage(img3, 500, 350, 25, 25);
    ctx.drawImage(img3, 325, 125, 25, 25);
    ctx.drawImage(img3, 150, 320, 25, 25);
    ctx.drawImage(img3, 700, 300, 25, 25);
    ctx.drawImage(img3, 750, 150, 25, 25);
}
img3.src = "IconLibrary/ribosome.svg";

//flagellum
var img4 = new Image();
img4.onload = function() {
    ctx.drawImage(img4, 250, 225, 25, 25);
}
img4.src = "IconLibrary/flagellum.svg";


function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

}
