describe("App", function() {

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
    expect(data.text).toEqual("asdf");
  });

});