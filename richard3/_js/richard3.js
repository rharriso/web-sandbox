//paralaxing plugin
(function($) {

	var settings = {
		magnitudeX: 100,
		magnitudeY: 50,
		paralaxFactor : 10
	}, $frames, $window, wHeight, wWidth, originalPosition, mouseX, mouseY;

	var methods = {
		init : function(options) {			
			if(options){
				$.extend(settings, options);
			}
			
			var opts = $.extend(settings, options);
				
			$t = $(this);
			$frames = $t.children(".frame");
			$frames.each(function(){
				$.data(this, "paralaxLayer", parseFloat($(this).attr('rel')));
				
			});
			originalPosition = $frames.position();
			
			//set up global event listeners
			$(document).mousemove(methods.onMouseMove);
			$window = $(window);
			$window.resize(methods.onWindowResize).resize();
			setInterval(methods.calculatePosition, 100);
		},
		onWindowResize : function(event){
			wHeight = $window.height();
			wWidth = $window.width();
		},
		onMouseMove : function(event){
			mouseX = event.clientX;
			mouseY = event.clientY;
		},
		calculatePosition : function(){
			var offsetX = (settings.magnitudeX)*(mouseX/wWidth) - (settings.magnitudeX/2),
				offsetY = (settings.magnitudeY)*(mouseY/wHeight) - (settings.magnitudeY/2), 
				frame, paralaxLayer, paralaxFactorX, paralaxFactorY;
				
			for(i=0; i<$frames.length; i++){
				$frame = $($frames[i]);
				paralaxLayer = $.data($frames[i], "paralaxLayer")/settings.paralaxFactor;
				paralaxFactorX = -paralaxLayer*offsetX,
				paralaxFactorY = -paralaxLayer*offsetY;
				
				$frame.clearQueue().animate({
					top: originalPosition.top+paralaxFactorY,
					left: originalPosition.left+paralaxFactorX,
				}, 250);
			}
		}
	}
	
	
	$.fn.parallax = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.');
		}
	};
})(jQuery);	