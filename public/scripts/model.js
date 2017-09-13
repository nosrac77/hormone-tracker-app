'use strict';

function DataPoint (date, prescription, dosage, tLevel, eLevel, logEntry){
  this.date = date;
  this.prescription = prescription;
  this.dosage = dosage;
  this.tLevel = tLevel;
  this.eLevel = eLevel;
  this.logEntry = logEntry;
};

DataPoint.prototype.toHtml = function() {
  var source   = $('#entry-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

$('#submit-button').on('click', function(e){
  // e.preventDefault();
  var obj = new DataPoint($('#date').val(), $('#prescription').val(), parseInt($('#dosage').val()), parseInt($('#tLevel').val()), parseInt($('#eLevel').val()), $('#entry-form').val());
  if(!localStorage.dataPoints) localStorage.dataPoints = JSON.stringify([]);
  var tempData = JSON.parse(localStorage.dataPoints);
  tempData.push(obj);
  localStorage.dataPoints = JSON.stringify(tempData);
  $.post('/submit', obj).then(console.log('post complete')).catch(console.error);
});
