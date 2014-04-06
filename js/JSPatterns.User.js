define(['JSPatterns', 'JSPatterns.Properties'], function(JSPatterns, Properties) {
	JSPatterns.User = function(options) {
		options = options || {};
		this._options = $.extend({}, JSPatterns.User.DEFAULTS, options);
		this.init();
	};
	
	JSPatterns.User.DEFAULTS = {
		userName: 'Sample User Name'
	};

	JSPatterns.User.prototype = new JSPatterns();

	JSPatterns.User.prototype.constructor = JSPatterns.User;

	JSPatterns.User.prototype.init = function() {
		if (this._options.hasOwnProperty('userName')) {
			this.userName = this._options.userName;
		}
		
		JSPatterns.prototype.init.call(this);
	};
	
	JSPatterns.User.prototype.createProperties = function() {
		this.properties = new Properties();
	};
	
	return(JSPatterns.User);
});