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

d3.selectAll('div').append('p').text("asdasd").attr('style', 'font-size:20');

d3.selectAll('.myDiv')
  .transition()
  .duration(1000)
  .style('background-color', 'cyan')

var svg = d3.select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);


let myData = [1, 2, 3, 4, 5, 6];
var bar1 = svg.append('circle')

  .attr("fill", "blue")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr('r', 10)
  .attr("height", 20)
  .on('mouseover', function (d) {
    if (d3.select(bar1).attr('r' == 50)) {
      bar1.transition()
        .ease(d3.easeLinear)
        .duration(500)
        .attr('r', 10)
        .attr("fill", "cyan")
        .attr('stroke', 'black');
    } else {
      update()
    }
  })
  .attr("width", 10);

  d3.select('body').append('h1').text();


//update();

function update() {
  bar1.transition()
    .ease(d3.easeLinear)
    .duration(500)
    .attr('r', 50)
    .attr("fill", "cyan")
    .attr('stroke', 'black');

}

