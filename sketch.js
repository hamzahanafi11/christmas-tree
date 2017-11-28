var angle;
var slider;

function setup() {
	var canvas = createCanvas(600,600);
	canvas.parent('tree');
	slider = createSlider(0,TWO_PI,0,0.01);
	slider.parent('slider');
}

/* required function for p5 */
function draw() {
	angle = slider.value();
	background(122,122,122);
	stroke(255);
	var len    = 180;
	var branch = 180;
	translate(width/2,height); // start drawing from bottom middel
	line(0,0,0,-height+60);
	translate(0,-len);
	root(branch);
}

function root(branch)
{
	if(branch > 1)
	{
		push();
			// rotate(angle);
			// line(0,0,0,-branch);
			// rotate(2*angle);
			// line(0,0,0,-branch);
			//alert(angle);

			rotate(angle+(PI/4));
				line(0,0,0,-branch);
				food(-branch);
				food(branch);
			rotate((PI/2));
				line(0,0,0,-branch);
				food(-branch);
				food(branch);
			rotate((PI/2));
				line(0,0,0,-branch);
				food(-branch);
				food(branch);
			rotate((PI/2));
				line(0,0,0,-branch);/**/
				food(-branch);
				food(branch);

		pop();
		translate(0,-20);
		root(branch-10);
	}
	else{
		stroke(0,200,100);
		fill(0,200,100);
		ellipse(0,0,5,5);
	}
}

function food(pos)
{
	push()
		stroke(250,0,0);
		fill(250,0,0);
			ellipse(0,0,5,5);

		stroke(0,250,0);
		fill(0,250,0);
		translate(-pos/6,0);
			ellipse(0,0,5,5);

		stroke(0,250,0);
		fill(0,250,0);
		translate(-pos/6,0);
			ellipse(0,0,5,5);

		stroke(250,0,0);
		fill(250,0,0);
		translate(-pos/6,0);
			ellipse(0,0,5,5);

		stroke(0,250,0);
		fill(0,250,0);
		translate(-pos/6,0);
			ellipse(0,0,5,5);

		stroke(0,250,0);
		fill(0,250,0);
		translate(-pos/6,0);
			ellipse(0,0,5,5);

		stroke(250,0,0);
		fill(250,0,0);
		translate(-pos/6,0);
			ellipse(0,0,5,5);
	pop();
}