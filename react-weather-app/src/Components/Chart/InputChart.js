import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class LineChart extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.chartData);
  }

  Celsius(data) {
    return Math.round((data -32)*5/9); 
  };

	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: `Temperature in ${this.props.chartData.name}`
			},
			axisY: {
				title: "Temperature",
				includeZero: false,
				suffix: "°C"
			},
			axisX: {
				title: "Time",
        includeZero: false,
        preffix: 'H',
        interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Temperature {x}: {y}°C",
				dataPoints: [
          { y: this.Celsius(this.props.chartData.main.temp_min) , indexLabel: "THE LOWEST",markerColor: "White", markerType: "cross", x: 1 },
          { y: this.Celsius(this.props.chartData.main.temp), indexLabel: "ACTUAL", x: 2},
          { y: this.Celsius(this.props.chartData.main.temp_max), indexLabel: "THE HIGHEST", markerColor: "red", x:3},
				
				]
			}]
		}
		
		return (
		<div>
			<h1>React Line Chart</h1>
			<CanvasJSChart options = {options} />
		</div>
		);
	}
}

export default LineChart;                           