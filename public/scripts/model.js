'use strict';

localstorage.dataPoints = [];

function DataPoint (date, dosage, tLevel, eLevel, log){
  this.date = date ;
  this.dosage = dosage ;
  this.tLevel = tLevel ;
  this.eLevel = eLevel ;
  this.log = log ;
  localstorage.dataPoints.push(this);
};

DataPoint.prototype.toHtml = function (){
   //manipulate template strings here so that the dom renders them to #log section

};
