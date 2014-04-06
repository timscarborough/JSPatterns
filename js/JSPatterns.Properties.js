define(['JSPatterns'], function(JSPatterns) {
	JSPatterns.Properties = function(options) {
		options = options || {};
		this._options = $.extend({}, JSPatterns.Properties.DEFAULTS, options);
		this.init();
	};
	
	JSPatterns.Properties.DEFAULTS = {
		PropertiesName: 'Sample Properties Name'
	};

	JSPatterns.Properties.prototype = new JSPatterns();

	JSPatterns.Properties.prototype.constructor = JSPatterns.Properties;

	JSPatterns.Properties.prototype.init = function() {
		if (this._options.hasOwnProperty('PropertiesName')) {
			this.PropertiesName = this._options.PropertiesName;
		}
		
		JSPatterns.prototype.init.call(this);
	};
	
	return(JSPatterns.Properties);
});