//this function creates a new chart and returns a reference to////////
function drawNewChart() {
	var lineChart = document.getElementById('webTraffic').getContext('2d');
	return new Chart(lineChart, {
		type: 'line',
		data: {
			labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
			datasets: [
				{
					data: [
						100,
						50,
						200,
						100, 
						300,
						150, 
						400,
						75, 
					],
					backgroundColor: [
						'rgba(226, 227, 246, 0.5)',
					],
					pointBorderColor: '#7377bf',
					pointBackgroundColor: '#fff',
					borderWidth: 1,
					pointBorderWidth: 2,
					pointHoverBorderWidth: 2,
					borderColor: '#a9ace5',
					lineTension: 0
			
				}
			]
		},		
		options: {
			maintainAspectRatio: false,
			responsive:true,
			aspectRatio:1,
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true
	          			}
	    			}
	  			]
	  		},

			legend: {
				display: false
			}
	 	}
	});

}
// update chart
function updateChart(chart, labels, data) {
    chart.data.labels = labels;
    chart.data.datasets[0].data = data;
    chart.update();
}
var chart = drawNewChart();
var chartTimes = document.querySelectorAll('.time-control');

chartTimes.forEach(function(e) {
	e.addEventListener('click', function() {
		var timeOption = this.getAttribute('id');
		if (timeOption == 'hourly') {
			updateChart(
				chart, 
				['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'], 
				[
					100,
					50,
					200,
					100, 
					300,
					150, 
					400,
					75
				]
			);
		} else if (timeOption == 'daily') {
			updateChart(
				chart, 
				['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'], 
				[
					200,
					50,
					400,
					100, 
					500,
					150, 
					600,
					175
				]
			);
		} else if (timeOption == 'weekly') {
			updateChart(
				chart, 
				['1', '2', '3', '4', '5', '6', '7'], 
				[
					1100,
					150,
					1200,
					100, 
					1300,
					150, 
					1400,
					75
				]
			);
		} else if (timeOption == 'monthly') {
			updateChart(
				chart, 
				['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], 
				[
					1100,
					150,
					1200,
					1100, 
					1300,
					150, 
					1400,
					175,
					500,
					1200,
					750,
					1000
				]
			);
		} 
	});
});
//end line chart/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//this is the bar chart//////////////////////////////////////////////////////////////////////////////////////////////////
var barChart = document.getElementById('dailyTraffic').getContext('2d');
var dailyTraffic = new Chart(barChart, {
	type: 'bar',
	data: {
		labels: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
		datasets: [{
			data: [
				50, 
				100, 
				175, 
				125, 
				225,
				190,
				75
			],
			backgroundColor: [
				'rgba(115, 119, 191)',
				'rgba(115, 119, 191)',
				'rgba(115, 119, 191)',
				'rgba(115, 119, 191)',
				'rgba(115, 119, 191)',
				'rgba(115, 119, 191)',
				'rgba(115, 119, 191)'
			],
			borderColor: '#a9ace5',
			borderCapStyle: 'round'
		}]
		
	},
	options: {
		maintainAspectRatio: false,
		responsive:true,
		aspectRatio:1,
		scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
		                }
            	}]
	        },
		legend:{
			display: false
		}
	}
	
});
//end bar chart/////////////////////////////////////////////////////////////////////////////////////////////////////////////


//this is the pie chart//////////////////////////////////////////////////////////////////////////////////////////////////
var pieChart = document.getElementById('mobileTraffic').getContext('2d');
var mobileTraffic = new Chart(pieChart, {
	type: 'doughnut',
	data: {
		labels: ['Phone', 'Tablets', 'Desktop'],
		datasets: [{
			label: 'Mobile Users',
			data: [
				250, 
				200, 
				150
			],
			backgroundColor: [
				'rgba(115, 115, 191)',
				'rgba(129, 201, 143)',
				'rgba(116, 177, 191)',
			]
		}]
		
	},
	options: {
		maintainAspectRatio: false,
		responsive:true,
		aspectRatio:1,
		title:{
			display: true,
			text: 'Daily Traffic',
			fontSize:25,
		},

		legend:{
			position: 'right',
			labels: {
               boxWidth: 19,
               fontSize: 18,
               padding: 18
            }
		}
	}
	
});
//end pie chart/////////////////////////////////////////////////////////////////////////////////////////////////////////////