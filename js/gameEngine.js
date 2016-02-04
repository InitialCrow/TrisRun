(function(ctx){
	var gameEngine = {
		
		initGameEngine : function(){
			consol(trisrun, "gameEngine :: ok");
			//..
		},
		run : function(obj1, obj2, speed){
			var reset = false;
			obj1.position.z += speed;
			obj2.position.z += speed;

			if (obj1.position.z > 500  ){
				obj1.position.set(0,0,-1500);
				
			}
			if (obj2.position.z > 500 ){
				obj2.position.set(0,0,-1500);
			}

		}
	}
	var self = gameEngine;
	ctx.gameEngine = gameEngine;
})(trisrun);