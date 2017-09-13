'use strict';

function DataPoint (date, prescription, dosage, tLevel, eLevel, logEntry){
  this.date = date;
  this.prescription = prescription;
  this.dosage = dosage;
  this.tLevel = tLevel;
  this.eLevel = eLevel;
  this.logEntry = logEntry;
};

$('#submit-button').on('click', function(e){
  e.preventDefault();
  var obj = new DataPoint($('#date').val(), $('#prescription').val(), parseInt($('#dosage').val()), parseInt($('#tLevel').val()), parseInt($('#eLevel').val()), $('#entry-form').val());
  var template = Handlebars.compile($('#entry-template').html());
  if(!localStorage.dataPoints) localStorage.dataPoints = JSON.stringify([]);
  console.log(localStorage.dataPoints);
  DataPoint.tempData = JSON.parse(localStorage.dataPoints);
  DataPoint.tempData.push(obj);
  DataPoint.tempData.forEach(function(data){$('#user-log-info').append(template(data));});
  localStorage.dataPoints = JSON.stringify(tempData);
  $.post('/submit', obj).then(console.log('post complete')).catch(console.error);
});
