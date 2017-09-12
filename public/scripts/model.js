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

DataPoint.prototype.toHtml = function (){
   //manipulate template strings here so that the dom renders them to #log section

};

$('#submit-button').on('click', function(e){
  e.preventDefault();
  var prescription = $('#prescription').val();
  var eLevel = parseInt($('#eLevel').val());
  var tLevel = parseInt($('#tLevel').val());
  var dosage = parseInt($('#dosage').val());
  var date = $('#date').val();
  var logEntry = $('#log-form').val();
  console.log(prescription, eLevel, tLevel, dosage, date, log);
  $.post('/submit', {
    prescription: prescription,
    eLevel: eLevel,
    tLevel: tLevel,
    dosage: dosage,
    date: date,
    logEntry: log
  })
    .then(console.log('post complete'))
    .catch(console.error);
  function render(){
    var obj = new DataPoint(date, prescription, dosage, tLevel, eLevel, log);
    console.log(obj);
    var template = Handlebars.compile($('#entry-template').html());
    $('#user-log-info').append(template(obj));
  }
  render();
});
