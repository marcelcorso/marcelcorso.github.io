r = Math.random;
var b = document.getElementsByTagName('body')[0];

function bootSqr(div, tilt, min, max, step, sign) {
    setInterval(function() {
      if ((tilt > max) || (tilt < min))
        sign *= -1;

      tilt = tilt + sign * step;

      div.style.transform = "rotate(" + tilt + "deg)"; 
    }, 20);
} 

var divHeight = 5;
var divWidth = 20;

var sqrNo = 5000;
for (var i = 0; i < sqrNo; i++) {
  var div = document.createElement('div');
  div.style.backgroundColor = "black"; 

  var l = i * (divWidth-3);
  var row = (l / document.documentElement.clientWidth);

  var ll = l % document.documentElement.clientWidth;
  div.style.left = ll + "px";

  var t = (10 + (i * i%15)) + divHeight * row * 3;
  div.style.top = t + "px"; 

  div.style.height =  divHeight + "px";
  div.style.width = divWidth + "px";
  b.append(div);  

  bootSqr(div, 0, -15, 90 + i*(i%0.7), 1 + (i * i%0.9), 1);
}

