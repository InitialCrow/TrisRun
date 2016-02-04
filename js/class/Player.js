function Map(name, size, skybox){
	this.name = name || "No-name-map" ;
	this.size = size || 1900;
	this.skybox = skybox || "insert assets";
}
Map.prototype.init = function() {
	console.log("--------- classe Map --------");
};