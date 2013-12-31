describe("Select Fields", function() {

	var form,
	data;

	beforeEach(function() {
		form = $("#select");
		form.find("[name=multipleSelect]").val(["asdf", "asdf3"]);
		data = form.formalizeData();
	});

	it("Should let me use select fields as well", function() {
		expect(data.select).toEqual("asdf");
		form.find("[name=select]").val("asdf2");
		var data2 = form.formalizeData();
		expect(data2.select).toEqual("asdf2");
	});

	it("Should let me use multiple select as well", function() {
		expect(data.multipleSelect).toEqual(["asdf", "asdf3"]);
		form.find("[name=multipleSelect]").val("asdf2");
		var data2 = form.formalizeData();
		expect(data2.multipleSelect).toEqual(["asdf2"]);
	});

});