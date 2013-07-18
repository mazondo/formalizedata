$.fn.formalizeData = function() {
	var data = {};

	this.find("input").each(function(index, value) {

		var name = $(this).attr("name");

		if (!data[name]) {
			//just a basic initial form input, throw it in
			data[name] = $(this).val();

		} else {
			//looks like it already exists, let's turn it into something!
			if (typeof(data[name]) === "string") {
				data[name] = [data[name]];
				data[name].push($(this).val());
			} else if ($.isArray(data[name])) {
				data[name].push($(this).val());
			}

		}

	});

	return data;
};