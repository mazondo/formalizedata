# Formalize Data
A javascript library to convert form data into a js object which can be converted to json using your favorite json library

## grabs your structure from the name of your inputs
```
<form id="form">
	<input name="name" value="Ryan"></input>
</form>

$("#form").formalizeData();

/*
{
	name: "Ryan"
}
*/
```

## lets you nest data as deep as you want
```
<input name="name.first" value="Ryan"></input>
<input name="name.last" value="Quinn"></input>
<input name="nested.very.very.deep" value="Hi!"></input>

/*
{
	name: {
		first: "Ryan",
		last: "Quinn"
	},
	nested: {
		very: {
			very: {
				deep: "Hi!"
			}
		}
	}
}
*/
```

## converts multiple inputs into arrays
```
<input name="tag" value="first"></input>
<input name="tag" value="second"></input>

/*
{
	tag: ["first", "second"]
}
*/
```

## Specify the type of data you want to see
```
<input name="age" data-type="number" value="22"></input>

/*
{
	age: 22
}
*/
```

## Roadmap
Very much a first version, currently only supports input fields and textarea fields.  Coming soon:
 - all input types
 - more data types