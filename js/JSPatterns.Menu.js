define(['JSPatterns'], function(JSPatterns) {
	JSPatterns.Menu = function(options) {
		options = options || {};
		this._options = $.extend({}, JSPatterns.Menu.DEFAULTS, options);
		this.init();
	};
	
	JSPatterns.Menu.DEFAULTS = {
		type: 'Sample Menu Type'
	};

	JSPatterns.Menu.prototype = new JSPatterns();

	JSPatterns.Menu.prototype.constructor = JSPatterns.Menu;

	JSPatterns.Menu.prototype.init = function() {
		if (this._options.hasOwnProperty('type')) {
			this.type = this._options.type;
		}
		
		JSPatterns.prototype.init.call(this);
	};
	
	return(JSPatterns.Menu);
});