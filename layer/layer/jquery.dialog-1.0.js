;(function($){
	$.fn.extend({
		dialog: function(options){
			var settings = $.extend({
				isDragable: false,
				hasMask: true
			},options);

		// var html = 	'<div class="x-dialog-wrapper">'
		// 				+'<div class="x-dialog-mask"></div>'
		// 				+'<div class="x-dialog-container">'
		// 					+'<div class="x-dialog-title">这是标题<span class="x-dialog-close">X</span></div>'
		// 					+'<div class="x-dialog-content">11111111111</div>'
		// 				+'</div>'
		// 			+'</div>';

		// this.append(html);

		var $wrapper = $('<div class="x-dialog-wrapper"></div>'),
			$mask = $('<div class="x-dialog-mask"></div>'),
			$container = $('<div class="x-dialog-container"></div>'),
			$title = $('<div class="x-dialog-title"><span class="x-dialog-close">X</span></div>'),
			$content = $('<div class="x-dialog-content"></div>');

			$container.append($title).append($content);
			$wrapper.append($mask).append($container);

			$('.x-dialog-title',$wrapper).prepend(settings.title);

			$content.load(settings.content);

			$('.x-dialog-close',$wrapper).on('click',function(){
				$wrapper.remove();
			});

			this.append($wrapper);
		}
	});
})(jQuery);