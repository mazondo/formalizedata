describe("Input Fields", function() {

	var form,
	data;

	beforeEach(function() {
		form = $("#form");
		data = $("#form").formalizeData();
	});

	it("Should grab the form the user wants and return a data item", function() {
		expect(typeof(form.formalizeData())).toEqual("object");
	});

	it("Should grab the value of a text field", function() {
		expect(data.textfield).toEqual("asdf");
	});

	it("Should turn multiple inputs with the same name into an array", function() {
		expect($.isArray(data.arraytext)).toBeTruthy();
		expect(data.arraytext.length).toEqual(3);
	});

	it("should let you nest data", function() {
		expect($.isPlainObject(data.nested)).toBeTruthy();
		expect(data.nested.text).toEqual("asdf");
	});

	it("Should handle arrays within nested data", function() {
		expect($.isArray(data.nested.array)).toBeTruthy();
		expect(data.nested.array.length).toEqual(2);
	});

	it("Should let me nest data very deeply", function() {
		expect(data.nested.deep.deep.level).toEqual("asdf");
	});

	it("Should let me specify if my input should be an integer", function() {
		expect(typeof(data.number)).toEqual("number");
	});

});