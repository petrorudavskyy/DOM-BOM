document.getElementById('player').style.top = '50px';
  document.getElementById('player').style.left = '50px';


document.body.onkeydown = function (e) {
	var el = document.getElementById('player');
  
  var KEYCODE_LEFT = 37;
  var KEYCODE_RIGHT = 39;
  var KEYCODE_TOP = 38;
  var KEYCODE_DOWN = 40;
  var KEYCODE_ENTER = 13;
  var KEYCODE_SPACE = 32;
  // if keycode .. -> smth
  if (e.keyCode == KEYCODE_LEFT) {
  	  el.style.left = (parseInt(el.style.left) - 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_RIGHT) {
    el.style.left = (parseInt(el.style.left) + 10) + 'px';
  } 
  else if (e.keyCode == KEYCODE_TOP) {
    el.style.top = (parseInt(el.style.top) - 10) + 'px';
  } 
  else if (e.keyCode == KEYCODE_DOWN) {
    el.style.top = (parseInt(el.style.top) + 10) + 'px';
  } 
  else if (e.keyCode == KEYCODE_ENTER || e.keyCode == KEYCODE_SPACE){
    makeFire(); //make fire
  }

//make fire, create bullet and animate this
function makeFire(){
  ball();
  firing();
}

//create bullet with style
function ball() {
    var bullet = document.createElement('div');
    el.appendChild(bullet);
    bullet.style.width = '6px';
    bullet.style.height = '6px';
    bullet.style.background = 'black';
    bullet.style.position = 'absolute';
    bullet.style.borderRadius = '3px';
    // bullet.style.transition= 'all 0.1s ease-out 0s';
  }
//function animate bullet
function firing() {
    var element = document.querySelector('#player div');
    var currentPosition = 1;
    var id = setInterval(frame, 1);
    //debugger;
    function frame() {
      if (currentPosition == 500) {
        clearInterval(id);
        deleteBullet();
      } else {
        currentPosition++; 
        element.style.top = currentPosition + 'px'; 
      }
    }
  }
function deleteBullet() {
    document.getElementById('player').childNodes[0].remove();
  }
}