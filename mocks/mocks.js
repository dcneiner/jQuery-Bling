(function($) {
	// This call intercepts all calls to a URL with /players/ in it
	// and returns what we put in the "johnneiner" variable instead
	
	// See http://code.appendto.com for more information on MockJax
	$.mockjax({
		url: "*/players/*",
		contentType: 'text/json',
		responseText: johnneiner
	});
} (jQuery));