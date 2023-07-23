// //your JS code here. If required.
let line = document.querySelector("#line");
let rotate=0;

function fn() {
	rotate+=1;
	line.style.transform = `rotate(${rotate}deg)`;
	requestAnimationFrame(fn);
}
fn()