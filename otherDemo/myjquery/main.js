$(function(){
	var idx = 0;
	var max = 5000;
	var min = 3000;
	var section = $('#section');
	var number = $('#number');

	draw();

	function draw(){
		idx++;
		var num = rand(max,min);
		number.text(idx+" : "+num);

		section.html('');

		for (var i = 0; i < num; i++) {
			var div = $('<div>').addClass('blk').text(i);
			section.append(div);
		}

		setTimeout(draw,200);

	}

	function rand(maximum,minimum){
		return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	}


});