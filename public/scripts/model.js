'use strict';

var dataPoints = [];

function DataPoint (date, dosage, tLevel, eLevel, log){
 this.date = date ;
 this.dosage = dosage ;
 this.tLevel = tLevel ;
 this.eLevel = eLevel ;
 this.log = log ;
 dataPoints.push(this);
}

if (localstorage.dataPoints) {
  dataPoints = localstorage.dataPoints;

} else {
  localstorage.dataPoints = dataPoints;
}

 //if localstorage.dataPoints then dataPoints = localstorage.dataPoints;
 //if not then localstorage.dataPoints = dataPoints

DataPoint.prototype.toHtml = function (){
   //manipulate template strings here

}
