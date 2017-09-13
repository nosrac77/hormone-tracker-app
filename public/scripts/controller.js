'use strict';

DataPoint.handleTabs();
JSON.parse(localStorage.dataPoints).forEach(function(data){toHtml(data);});
