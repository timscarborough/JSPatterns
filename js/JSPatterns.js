https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

define(['jquery'], function($) {
	JSPatterns = function(options) {
		options = options || {};
		this._options = $.extend({}, JSPatterns.DEFAULTS, options);
		this.init(options);
	};
	
	JSPatterns.DEFAULTS = {
		debugging: false,
		id: 'FROM DEFAULTS'
	};

	JSPatterns.prototype.init = function() {	
		if (this._options.hasOwnProperty('id')) {
			this.id = this._options.id;
		}
		
		if (this._options.hasOwnProperty('debugging')) {
			this.debugging = this._options.debugging;
		}
	};

	JSPatterns.prototype.print = function() {
		console.log('--------------------');
		console.log(this);
		
		console.log('PROPERTIES:');
		for (var property in this) {
			if (typeof this[property] !== 'function') {
				console.log(property + ' = ' + this[property]);
			}
		}
		console.log('--------------------');
	};
	
	return(JSPatterns);
});