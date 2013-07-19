$.fn.formalizeData = function() {
	var data = {};

	$(this).find("input, textarea").each(function(index, value) {

		var name = $(this).attr("name"),
			elements = name.split("."),
			result = $.extend({}, data),
			dataBuilder;

		/*
			Traverse through the elements in the name trying to get to the final result
			save the final result for processing later
		*/

		$.each(elements, function(index, val) {
			result = result[val] || false;
			if (!result) {
				return true;
			}
		});


		/*
			now that we have the result, we need to tell it what to be
			we'll check to see if it's defined, and if not just set it to the value
			If it is, we will decide if it's an object or an array and handle it accordingly
		*/
		if (!result) {
			/*
				When nothing exists in the end location, we just save the value
			*/
			result = $(this).val();

		} else {
			/*
				When something does exist at the end location, we turn it into an array and add this value to it
			*/
			if (typeof(result) === "string") {
				result = [data[name]];
				result.push($(this).val());
			} else if ($.isArray(result)) {
				result.push($(this).val());
			}

		}


		/*
			Now we have a result saved, and we need to add it where it belongs in the data object
			We'll need to build out the data structure as we go if any parent elements are not yet defined

			dataBuidlder is used to store a reference to the current location in the data object
		*/

		dataBuilder = data;
		$.each(elements, function(index, val) {
			if ( (index + 1) == elements.length) {
				//we're at the end location, so let's save the result here
				//it's safe to overwrite a previous value because we've accounted for it above
				dataBuilder[val] = result;
			} else {
				//not at the end, so let's make sure the item exists
				if (!dataBuilder[val]) {
					//doesn't exist, let's create it
					dataBuilder[val] = {};
				}
				//now progress the dataBuilder up a level
				dataBuilder = dataBuilder[val];
			}
		});


	});
	
	return data;
};