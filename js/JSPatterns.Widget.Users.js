define(['JSPatterns.Widget', 'JSPatterns.User'], function(Widget, User) {
	// Constructor
	JSPatterns.Widget.Users = function (options) {
		options = options || {};
		this._options = $.extend({}, JSPatterns.Widget.Users.DEFAULTS, options);
		this.init();	
		
		// Calling internal private functions using .call(this, [parameters]);
		internalFunction.call(this, '-MODIFIED');
	};
	
	JSPatterns.Widget.Users.DEFAULTS = {
		users: []
	};

	// Set inheritance.
	JSPatterns.Widget.Users.prototype = new Widget();

	// Fix prototype for the constructor.
	JSPatterns.Widget.Users.prototype.constructor = JSPatterns.Widget.Users;

	// All classes have an init function that ends with a call to the prototype's init.
	JSPatterns.Widget.Users.prototype.init = function() {
		if (this._options.hasOwnProperty('users')) {
			this.users = this._options.users;
		}
		
		Widget.prototype.init.call(this);	
	};
	
	JSPatterns.Widget.Users.prototype.createUsers = function(numberToCreate) {
		numberToCreate = numberToCreate || 10;
		
		for (var i = 0; i < numberToCreate; i++) {
			var user = new User({userName: 'User ' + i});
			user.createProperties()
			this.users.push(user);
		}
	};

	function internalFunction(suffix) {
		for (var i = 0; i < this.users.length; i++) {
			this.users[i] += suffix;
		}
	}

	return(JSPatterns.Widget.Users);
});