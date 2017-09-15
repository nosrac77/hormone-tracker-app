'use strict';

loadLocalStorage();
renderLogs();
renderChart();
DataPoint.handleTabs();
$('#submit-button').on('click', handleSubmit);
