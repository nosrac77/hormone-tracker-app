'use strict';

var eLevels = [];
var tLevels = [];
var chartDates = [];

function DataPoint (date, prescription, dosage, tLevel, eLevel, logEntry){
  this.date = date;
  this.prescription = prescription;
  this.dosage = dosage;
  this.tLevel = tLevel;
  this.eLevel = eLevel;
  this.logEntry = logEntry;
};

function loadLocalStorage (){
  if(!localStorage.dataPoints) localStorage.dataPoints = JSON.stringify([]);
  DataPoint.tempData = JSON.parse(localStorage.dataPoints);
  DataPoint.tempData.forEach(function (input){
    eLevels.push(input.eLevel);
    tLevels.push(input.tLevel);
    chartDates.push(input.date);
  });
};

function renderLogs(){
  $('#user-log-info').html('');
  var template = Handlebars.compile($('#entry-template').html());
  DataPoint.tempData.forEach(function(data){
    $('#user-log-info').append(template(data));
  });
};

function handleSubmit(e){
  e.preventDefault();
  //if(localStorage.user) {
    // insert record into exisitng user
  //} else {
    // enter new user and info into database and then get the user_id to save to localStorage.user
  //}
  $('#user-log-info').empty();
  var obj = new DataPoint($('#date').val(), $('#prescription').val(), parseInt($('#dosage').val()), parseInt($('#tLevel').val()), parseInt($('#eLevel').val()), $('#form-textarea').val());
  console.log(localStorage.dataPoints);
  $.post('/submit', obj).then(function(result){
    console.log('post complete');
    localStorage.user = result;
  }).catch(console.error);
  // $.get('/user').then(function(result){localStorage.user = result;}).catch(console.error);
  console.log(localStorage.user);
  DataPoint.tempData = JSON.parse(localStorage.dataPoints);
  if(obj.date &&
     obj.prescription &&
     obj.dosage &&
     obj.eLevel &&
     obj.tLevel
   ){
    DataPoint.tempData.push(obj);
  }else{
    alert('You must complete all fields.');
    return;
  }
  localStorage.dataPoints = JSON.stringify(DataPoint.tempData);
  loadLocalStorage();
  renderLogs();
  renderChart();
  $('.clearfix').val('');
  $('textarea').val('');
};
