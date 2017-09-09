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

 DataPoint.prototype.toHtml = function (){
   //manipulate template strings here
 }

 
