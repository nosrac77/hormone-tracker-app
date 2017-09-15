'use strict';

DataPoint.handleTabs = function() {
  $('.tab').on('click', function(){
    $('.data').hide();
    var dataCat = $(this).attr('data-category');
    $('#' + dataCat).show();
    console.log('Showing: ' + dataCat);
  });
};


function renderChart () {
  var ctx = document.getElementById('myChart').getContext('2d');

  var chart = new Chart (ctx, {
    type: 'line',
    data: {
      labels: chartDates,
      datasets: [{
        label: "Estrogen",
        backgroundColor: 'rgb(238, 117, 234)',
        borderColor: 'rgb(0,0,0)',
        borderWidth: '3px',
        pointBackgroundColor: 'rgb(224, 224, 224)',
        pointBorderColor: 'rgb(238, 117, 234)',
        pointBorderWidth: '1px',
        pointStyle: 'circle',
        showLines: true,
        fontColor: 'rgb(255, 255, 255)',
        data: eLevels,
      },
      {
        label: "Testosterone",
        backgroundColor: 'rgb(0, 255, 255)',
        borderColor: 'rgb(0,0,0)',
        borderWidth: '3px',
        pointBackgroundColor: 'rgb(224, 224, 224)',
        pointBorderColor: 'rgb(0, 255, 255)',
        pointBorderWidth: '1px',
        pointStyle: 'circle',
        showLines: true,
        fontColor: 'rgb(255, 255, 255)',
        data: tLevels,
      }]
    },
  });
  }
