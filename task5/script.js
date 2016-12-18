//left box is preventdefault
var onClickLeft = function (e) {
	var $el = e.target;
	event.preventDefault();
  	alert('You clicked on  left box:' + $el.id + ' ! ');
}
//box left clicked
box1.onclick = onClickLeft;
box2.onclick = onClickLeft;
box3.onclick = onClickLeft;
//right box is with stoppropagation()
var onClickRight = function (e) {
	var $el = e.target;
	event.stopPropagation();
  	alert('You clicked on right box:' + $el.id + ' ! ');
}
//box right clicked
box11.onclick = onClickRight;
box22.onclick = onClickRight;
box33.onclick = onClickRight;