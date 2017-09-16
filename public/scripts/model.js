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

function handleDB(obj) {
  console.log('inside of handleDB');
  if(!localStorage.user) {
    console.log('no user in localStorage');
    $.post('/submit', obj)
    .then(function(result){
      console.log('post complete');
      localStorage.user = result;
    })
    .catch(console.error);
  } else {
    console.log('inside of else statement in handleDB');
    var userId = JSON.parse(localStorage.user);
    console.log('userId looks like ' + userId);
    $.ajax({
    url: `/user/${userId}`,
    method: 'POST',
    data: obj
    })
    .then(function(data) {
      console.log(data);
    });
  }
}


function handleSubmit(e){
  e.preventDefault();
  $('#user-log-info').empty();
  console.log(localStorage.user);
  var formObj = new DataPoint($('#date').val(), $('#prescription').val(), parseInt($('#dosage').val()), parseInt($('#tLevel').val()), parseInt($('#eLevel').val()), $('#form-textarea').val());
  handleDB(formObj);
  DataPoint.tempData = JSON.parse(localStorage.dataPoints);
  if(formObj.date &&
     formObj.prescription &&
     formObj.dosage &&
     formObj.eLevel &&
     formObj.tLevel
   ){
    DataPoint.tempData.push(formObj);
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
