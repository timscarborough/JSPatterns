define(['JSPatterns'], function(JSPatterns) {
	JSPatterns.Widget = function(options) {
		options = options || {};
		this._options = $.extend({}, JSPatterns.Widget.DEFAULTS, options);
		this.init();
	};
	
	JSPatterns.Widget.DEFAULTS = {
		name: 'NAME FROM DEFAULTS'
	};

	JSPatterns.Widget.prototype = new JSPatterns();

	JSPatterns.Widget.prototype.constructor = JSPatterns.Widget;

	JSPatterns.Widget.prototype.init = function() {
		if (this._options.hasOwnProperty('name')) {
			this.name = this._options.name;
		}
		
		JSPatterns.prototype.init.call(this);
	};
	
	return(JSPatterns.Widget);
});