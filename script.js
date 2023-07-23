//your JS code here. If required.
let line = document.querySelector("#line");
rotate=0;

function fn() {
	rotate+=1;
	line.style.transform = `rotate(${rotate}deg)`;
	requestAnimationFrame(rotateLine);
}
fn()