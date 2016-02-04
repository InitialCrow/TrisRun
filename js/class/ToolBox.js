function ToolBox(controls, w, h, x,y){
	this.w = w || 15;
	this.h = h || 15;
	this.x = x || 15;
	this.y = y || 15;
	this.controls = controls;
}

ToolBox.prototype.display = function(nb, url) {
	consol(trisrun,"UserInterface :: ok");
	var div = document.createElement("div");
	div.style.height = window.innerHeight/1.5 +"px";
	div.style.width = window.innerWidth/4+"px";
	div.setAttribute('id','ui-box');
	for (var i = 0; i< nb; i++){
		div.innerHTML += "<img src="+url+" alt='' class='tool'/>";
		
	}
	document.body.appendChild(div);
	

};