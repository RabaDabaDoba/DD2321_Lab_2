d3.select('body').style('background-color', 'white');

d3.select('body').append('div')
.attr('id', 'myDiv')
.attr('width', '100px')
.attr('height', '100px')
.style('background-color', 'yellow');

d3.select('body').append('div')
.attr('class', 'myDiv')
.attr('width', '100px')
.attr('height', '100px')
.style('background-color', 'red');

d3.selectAll('div').append('p').text("asdasd").attr('style','font-size:20');

d3.selectAll('.myDiv')
.transition()
.duration(1000)
.style('background-color','cyan')

var svg = d3.select("body")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);

var bar1 = svg.append('rect')
        .attr("fill", "blue")
        .attr("x", 100)
        .attr("y", 20)
        .attr("height", 20)
        .attr("width", 10);

update();

function update(){
  bar1.transition()
  .ease(d3.easeLinear)
  .duration(2000)
  .attr("height",100)

}

