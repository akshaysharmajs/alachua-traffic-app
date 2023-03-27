import React, { Component } from 'react';
import CanvasJSReact from './canvasjs/canvasjs.react';
import { Container, Navbar } from 'react-bootstrap';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



class Chart extends Component {

	render() {
    var female_count = 0;
var male_count = 0;
var male_ages = [];
var female_ages = [];

    this.props.drivers.map(d => {
      if (d.SEX === "M") {
        male_ages.push(d.AGE);
        male_count++;
      } else {
        female_ages.push(d.AGE);
        female_count++;
      }
  });
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				
			},
			axisX: {
				title: "Gender",
				reversed: true,
			},
			axisY: {
				title: "Number of Crashes",
				includeZero: true,
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  male_count, label: "Male" },
					{ y:  female_count, label: "Female" },
				]
			}]
		}
		return (
		<div>
      <Navbar bg='dark' expand='lg' variant='light'>
        <Container>
            <Navbar.Brand>Driver Data Visualization</Navbar.Brand>
        </Container>
      </Navbar>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
}

export default Chart