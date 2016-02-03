(function(ctx){
	var trisrun = {
		webgl : {},

		config : { debug : true},

		init : function(){
			
			this.initWebgl();
			this.map.init();
			consol(this, "Trisrun :: ok");
			return this;

		},

		start : function(){
			this.webgl.renderer.render(this.webgl.scene, this.webgl.camera);

			consol(this, "============== Trisrun :: started =================");
			this.update();
		},

		initWebgl : function(){

			var w = this.webgl; // shorcut
			w.scene = new THREE.Scene();

			w.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000 );
			w.camera.position.set(0, 0, 15);


			w.renderer = new THREE.WebGLRenderer();
			w.renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.style.margin = 0;
			document.body.style.overflow = 'hidden';
			document.body.appendChild( w.renderer.domElement );

			
			debugTool(this, w);
			consol(this, "==================== COMPONENTS ===================");
			consol(this, "webgl :: ok")
		},

		update : function(){
			requestAnimationFrame(trisrun.update);
			if (trisrun.config.debug === true){
				trisrun.stats.begin();
				
				trisrun.stats.end()
			}
			else{

			}
			trisrun.webgl.renderer.render(trisrun.webgl.scene, trisrun.webgl.camera);
			
			    // monitored code goes here
			
			
			
		},

	}

	ctx.trisrun = trisrun;
	

	
})(window);


