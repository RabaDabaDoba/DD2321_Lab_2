//interact with this variable from a javascript console
var pc0;

d3.csv('planet.csv', function(data) {
pc0 = d3.parcoords()("#example0")
  .data(data)
	.bundlingStrength(0) // set bundling strength
	.smoothness(0)
	.bundleDimension("cylinders")
	.showControlPoints(false)
	.hideAxis(["name"])
	.render()
	.brushMode("1D-axes")
	.reorderable()
	.interactive();

	// smoothness
	d3.select("#smoothness").on("change", function() {
		d3.select("#smooth").text(this.value);
		pc0.smoothness(this.value).render();
	});

	// bundling strength slider
	d3.select("#bundling").on("change", function() {
		d3.select("#strength").text(this.value);
		pc0.bundlingStrength(this.value).render();
	});

	var select = d3.select("#bundleDimension").append("select").on("change", changeBundle);

	var options = select.selectAll('option')
		.data(d3.keys(pc0.dimensions()));

	options
		.enter()
		.append("option")
		.attr("value", function(d) {return d;})
		.text(function(d) {return d;});

	function changeBundle() {
		pc0.bundleDimension(this.value);
	}

});