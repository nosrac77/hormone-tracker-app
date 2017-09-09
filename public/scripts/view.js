'use strict';

Datapoint.handleTabs = function(event){
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
      
    }]
  },
});
