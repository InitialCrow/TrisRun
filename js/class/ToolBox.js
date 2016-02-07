function ToolBox(controls, w, h, x,y){
	this.w = w || 15;
	this.h = h || 15;
	this.x = x || 15;
	this.y = y || 15;
	this.controls = controls;
}

ToolBox.prototype.init= function(nb, url, id) {
	consol(trisrun,"UserInterface :: ok");
	var div = document.createElement("div");
	div.style.height = window.innerHeight/1.5 +"px";
	div.style.width = window.innerWidth/4+"px";
	div.setAttribute('id',id);
	for (var i = 0; i< nb; i++){
		div.innerHTML += "<img src="+url+" alt='' class='tool'/>";
		
	}
	document.body.appendChild(div);
	

};
ToolBox.prototype.hide= function(id) {
	
	var elem = document.getElementById(id);
	elem.style.visibility = "hidden"
	
	

};
ToolBox.prototype.show= function(id) {
	
	var elem = document.getElementById(id);
	elem.style.visibility = "visible"
	
	

};