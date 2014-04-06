require.config({
	paths: {
		jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
		bootstrap: 'https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min'
	},
	shim: {
		'bootstrap': { deps: ['jquery'], exports: '$.fn.affix' }, 
        'bootstrap': { deps: ['jquery'], exports: '$.fn.alert' },
        'bootstrap': { deps: ['jquery'], exports: '$.fn.button' },
        'bootstrap': { deps: ['jquery'], exports: '$.fn.carousel' },
        'bootstrap': { deps: ['jquery'], exports: '$.fn.collapse' },
        'bootstrap': { deps: ['jquery'], exports: '$.fn.dropdown' },
        'bootstrap': { deps: ['jquery'], exports: '$.fn.modal' },
        'bootstrap': { deps: ['jquery'], exports: '$.fn.popover' },
        'bootstrap': { deps: ['jquery'], exports: '$.fn.scrollspy' },
        'bootstrap': { deps: ['jquery'], exports: '$.fn.tab'},
        'bootstrap': { deps: ['jquery'], exports: '$.fn.tooltip' },
        'bootstrap': { deps: ['jquery'], exports: '$.fn.transition' } 		
	}
});

require(
	[
		'jquery',
		'bootstrap',
		'JSPatterns.Menu',
		'JSPatterns.Widget.Users'		
	],
	function($, bootstrap, Menu, UsersWidget) {	
		var menu = new Menu();	
		menu.print();
		
		var options = {
			id: '0',
			name: 'User Widget',
			debugging: true
		};
		var usersWidget = new UsersWidget(options);
		usersWidget.print();
		
		$('#testStart').on('click', function() {
			usersWidget.createUsers();
			usersWidget.print();
			
			$('#testModal').modal('show');
		});

		$('#testAlert').on('click', function() {
			$('.alert').toggleClass('hidden');
		});
	}
);