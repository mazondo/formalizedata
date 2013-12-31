describe("Hidden Inputs", function() {

	var form,
	data;

	beforeEach(function() {
		form = $("#hidden-fields");
		data = form.formalizeData();
	});

	it("Should let me use hidden fields as well", function() {
		expect(data.hiddenField).toEqual("asdf");
	});

});