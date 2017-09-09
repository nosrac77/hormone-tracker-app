'use strict';

DataPoint.handleTabs = function(event){
  $('.data').hide();
  //$('.tab').on('click', event => { hide id's that match the clicked tabs' data category }
};

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart (ctx, {
  type: 'line',
  data: {
    labels: [dataPoints.date],
    datasets: [{
      label: "Estrogen",
      backgroundColor: 'rgb(0,0,0)',
      borderColor: 'rgb(238, 117, 234)',
      borderWidth: '3px',
      pointBackgroundColor: 'rgb(224, 224, 224)',
      pointBorderColor: 'rgb(238, 117, 234)',
      pointBorderWidth: '1px',
      pointStyle: 'circle',
      showLines: true,
      fontColor: 'rgb(255, 255, 255)',
      data: [dataPoints.eLevel],
    },
    {
      label: "Testosterone",
      backgroundColor: 'rgb(0,0,0)',
      borderColor: 'rgb(0, 255, 255)',
      borderWidth: '3px',
      pointBackgroundColor: 'rgb(224, 224, 224)',
      pointBorderColor: 'rgb(0, 255, 255)',
      pointBorderWidth: '1px',
      pointStyle: 'circle',
      showLines: true,
      fontColor: 'rgb(255, 255, 255)',
      data: [dataPoints.tLevel],
    }]
  },
});
