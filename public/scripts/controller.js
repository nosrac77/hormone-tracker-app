'use strict';

DataPoint.handleTabs();

localstorage.dataPoints.forEach(input => $('#handlebars-entry').append(input.toHtml()));
//This should render from localstorage.dataPoints but doesn't. localstorage also
//seems to clear after page reload?  -Rowen
