'use strict';

var localstorage = localstorage || {};

localstorage.dataPoints = [];

function DataPoint (date, prescription, dosage, tLevel, eLevel, logEntry){
  this.date = date;
  this.prescription = prescription;
  this.dosage = dosage;
  this.tLevel = tLevel;
  this.eLevel = eLevel;
  this.logEntry = logEntry;
  localstorage.dataPoints.push(this);
};

DataPoint.prototype.toHtml = function (){
   //manipulate template strings here so that the dom renders them to #log section

};

$('#submit-button').on('click', function(e){
  e.preventDefault();
  var obj = new DataPoint($('#date').val(), $('#prescription').val(), parseInt($('#dosage').val()), parseInt($('#tLevel').val()), parseInt($('#eLevel').val()), $('#entry-form').val());
  $.post('/submit', obj).then(console.log('post complete')).catch(console.error);
});
