(function(ctx){
	var trisrun = {
		config : { debug : true},

		init : function(){
			this.webgl.initWebgl();
			this.physic.initPhysic();
			
			this.map.init();
			this.player.init();
			this.gameEngine.initGameEngine();

			consol(this, "Trisrun :: ok");	
			return this;
		},

		start : function(){
			

			consol(this, "============== Trisrun :: started =================");
			this.update();
		},
		update : function(){
			requestAnimationFrame(trisrun.update);
			
			if (trisrun.config.debug === true){

				trisrun.webgl.stats.begin();

				trisrun.physic.world.step(1/60);
				if (trisrun.player.mesh != undefined){

					
					trisrun.gameEngine.animate();

				}
      		

				
				trisrun.webgl.stats.end()
			}
			else{
						trisrun.physic.world.step(1/60);
				if (trisrun.player.mesh !== undefined){

					
					trisrun.gameEngine.animate();

				}
			}

			trisrun.webgl.renderer.render(trisrun.webgl.scene, trisrun.webgl.camera);
			
			    // monitored code goes here
			
			
			
		},


	}

	ctx.trisrun = trisrun;
	

	
})(window);


