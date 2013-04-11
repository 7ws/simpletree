/* Simpletree
licensed under MIT.

by Evan Myller (emyller＠7ws.co)
*/

+function ($) {
'use strict';

// hide all submenus by default
$('ul.simpletree ul').hide();

$('ul.simpletree li:has(ul)')  // items with submenus

	// add a class to identify them
	.addClass('_has_submenu')

	.on('click', function (e) {
		var item = $(this),
		    handle = item.children(':first');

		// do nothing if the click wasn't fired on the handle
		if (!(handle[0] === e.target || $.contains(handle, e.target)))
			return;

		// toggle their 'selected' state
		item.toggleClass('selected');

		// toggle submenu with a fancy animation
		item.children('ul').slideToggle('fast');
	});

}(jQuery);
