describe("Text Areas", function() {

	var form,
	data;

	beforeEach(function() {
		form = $("#form");
		data = $("#form").formalizeData();
	});

	it("Should let me use textareas as well", function() {
		expect(data.largetext).toEqual("large text goes here");
	});

	it("Should let me nest with arrays", function() {
		expect($.isArray(data.nestedlarge.text)).toBeTruthy();
		expect(data.nestedlarge.text.length).toEqual(2);
	});

	it("Should let me nest very very deeply", function() {
		expect(data.nestedlarge.very.very.deeply).toEqual("asdf");
	});

});