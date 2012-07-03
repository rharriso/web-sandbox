(function(){
	//constructor
	window.Sprite3D = function(elem){
		//html elem to associated with this class
		this.elem = elem;
		
		this.rotateX	= 0;
		this.rotateY	= 0;
		this.rotateZ	= 0;
		this.rotMat		= null;
		
		this.scaleXYX	= 1;
		this.scaleMat	= null;
		
		this.translateX = 0;
		this.translateY = 0;
		this.translateZ = 0;
		this.transMat	= null;	
		
		this.originMat	= null;
	};

	// public functions
	Sprite3D.prototype.rotate = function(x, y, z){
		this.rotateX += x*DEGREES_TO_RADIANS;
		this.rotateY += y*DEGREES_TO_RADIANS;
		this.rotateZ += z*DEGREES_TO_RADIANS;
		
		createRotationMatrix.apply(this);
	}; 

	Sprite3D.prototype.scale = function(scale){
		this.scaleXYX *= scale;
		
		createScaleMatrix.apply(this);
	}
	
	Sprite3D.prototype.translate = function(x, y, z){
		this.translateX += x;
		this.translateY += y;
		this.translateZ += z;
		
		createTranslationMatrix.apply(this);
	}
	
	Sprite3D.prototype.setRotate = function(x, y, z){
		this.rotateX = x*DEGREES_TO_RADIANS;
		this.rotateY = y*DEGREES_TO_RADIANS;
		this.rotateZ = z*DEGREES_TO_RADIANS;
		
		createRotationMatrix.apply(this);
	}; 

	Sprite3D.prototype.setScale = function(scale){
		this.scale = scale;
		
		createScaleMatrix.apply(this);
	}
	
	Sprite3D.prototype.setTranslate = function(x, y, z){
		this.translateX = x;
		this.translateY = y;
		this.translateZ = z;
		
		createTranslationMatrix.apply(this);
	}
	
	Sprite3D.prototype.refreshTransform = function(){
		//calculate and assign
		var tM = Matrix.I(4);
		
		/*
		 * Apply the matrices that have things to apply
		 */
		
		//translate
		if(this.transMat){
			tM = tM.x(this.transMat);
		}
		//scale
		if(this.scaleMat){
			tM = tM.x(this.scaleMat);
		}
		//rotate
		if(this.rotMat){
			if(this.originMat){
				tM = tM.x(this.originMat).x(this.rotMat).x(this.originMat1);
			}else{
				tM = tM.x(this.rotMat);	
			}
		}		
		
		productMat  = "matrix3d("
		productMat +=	tM.e(1,1).toFixed(10) + "," + tM.e(1,2).toFixed(10) + "," + tM.e(1,3).toFixed(10) + "," + tM.e(1,4).toFixed(10) + ","
		productMat +=	tM.e(2,1).toFixed(10) + "," + tM.e(2,2).toFixed(10) + "," + tM.e(2,3).toFixed(10) + "," + tM.e(2,4).toFixed(10) + ","
		productMat +=	tM.e(3,1).toFixed(10) + "," + tM.e(3,2).toFixed(10) + "," + tM.e(3,3).toFixed(10) + "," + tM.e(3,4).toFixed(10) + ","
		productMat +=	tM.e(4,1).toFixed(10) + "," + tM.e(4,2).toFixed(10) + "," + tM.e(4,3).toFixed(10) + "," + tM.e(4,4).toFixed(10)
		productMat += ")";
		
		this.elem.style.webkitTransform = productMat;
	}

	Sprite3D.prototype.setTransformOrigin = function(x, y, z){
		//translation
		this.originMat = $M([
		  [1,0,0,0],
		  [0,1,0,0],
		  [0,0,1,0],
		  [-x,-y,-z,1]
		]);
		this.originMat1 = this.originMat.inv();
	}

	//private
	var DEGREES_TO_RADIANS = Math.PI/180;
	
	//private functions
	function createRotationMatrix(){
		var rotXMat = $M([
		  [1,0,0,0],
		  [0,Math.cos(this.rotateX), Math.sin(-this.rotateX), 0],
		  [0,Math.sin(this.rotateX), Math.cos( this.rotateX), 0],
		  [0,0,0,1]
		]),
		rotYMat = $M([
		  [Math.cos(this.rotateY), 0, Math.sin( this.rotateY),0],
		  [0,1,0,0],
		  [Math.sin(-this.rotateY), 0, Math.cos(this.rotateY), 0],
		  [0,0,0,1]
		]),
		rotZMat = $M([
		  [Math.cos(this.rotateZ), Math.sin(-this.rotateZ), 0, 0],
		  [Math.sin(this.rotateZ), Math.cos( this.rotateZ), 0, 0],
		  [0,0,1,0],
		  [0,0,0,1]
		]);
		
		this.rotMat = rotXMat.x(rotYMat).x(rotZMat);
	}
	
	function createScaleMatrix(){
		//scale
		this.scaleMat = $M([
			[this.scaleXYX, 0, 0, 0],
			[0, this.scaleXYX, 0, 0],
			[0, 0, this.scaleXYX, 0],
			[0,0,0, this.scaleXYX]
		]);
	}
	
	function createTranslationMatrix(){
		//translation
		this.transMat = $M([
		  [1,0,0,0],
		  [0,1,0,0],
		  [0,0,1,0],
		  [this.translateX,this.translateY,this.translateZ,1]
		]);
	}
		
}());