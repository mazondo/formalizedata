describe("Radio Inputs", function() {

	var form,
	data;

	beforeEach(function() {
		form = $("#radio");
		form.find("input[value=asdf]").click();
		data = form.formalizeData();
	});

	it("Should let me use radio fields as well", function() {
		expect(data.radio).toEqual("asdf");
		form.find("input[value=asdf2]").click();
		var data2 = form.formalizeData();
		expect(data2.radio).toEqual("asdf2");
	});

});