'use strict';

var localstorage = localstorage || {};

localstorage.dataPoints = [];

function DataPoint (date, dosage, tLevel, eLevel, log){
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
  var userLogObj = {
    eLevel: parseInt($('#eLevel').val()),
    tLevel: parseInt($('#tLevel').val()),
    dosage: parseInt($('#dosage').val()),
    date: $('#date').val(),
    log: $('#log-form').val()
  };
  console.log(userLogObj);
  var jsonObj = JSON.stringify(userLogObj);
  $.post('/submit', jsonObj)
    .then(console.log('post complete'))
    .catch(console.error);
});
