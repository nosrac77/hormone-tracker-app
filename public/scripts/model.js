'use strict';

var localstorage = localstorage || {};

localstorage.dataPoints = [];

function DataPoint (date, prescription, dosage, tLevel, eLevel, log){
  this.date = date;
  this.prescription = prescription;
  this.dosage = dosage;
  this.tLevel = tLevel;
  this.eLevel = eLevel;
  this.log = log;
  localstorage.dataPoints.push(this);
};

//took this from my portfolio -Rowen.
DataPoint.prototype.toHtml = function() {
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  return template(this);
};

$('#submit-button').on('click', function(e){
  // e.preventDefault();
  // Refreshing the page on submit will cause the log and graph to repopulate
  // with the most recent datapoints, so maybe keep this functionality?
  // -Rowen
  var prescription = $('#prescription').val();
  var eLevel = parseInt($('#eLevel').val());
  var tLevel = parseInt($('#tLevel').val());
  var dosage = parseInt($('#dosage').val());
  var date = $('#date').val();
  var log = $('#log-form').val();

  //added datapoint construction in submit handler. -Rowen
  new DataPoint(date, prescription, dosage, tLevel, eLevel, log);
  console.log(prescription, eLevel, tLevel, dosage, date, log);
  $.post('/submit', {
    prescription: prescription,
    eLevel: eLevel,
    tlevel: tLevel,
    dosage: dosage,
    date: date,
    log: log
  })
    .then(console.log('post complete'))
    .catch(console.error);
});
