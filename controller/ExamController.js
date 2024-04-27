import * as ExamService from '../service/ExamService.js';
import * as HandleView from '../view/HandleView.js';
import * as ElementModel from '../model/ElementModel.js';
// Code that works with controller: display auto list
document.addEventListener('DOMContentLoaded', function() {
	const data = ExamService.getAllDataExams();
	// Display the list in the browser
	HandleView.displayData(data, ElementModel.getElementDisplayByElementID());
	HandleView.formatDataDisplay();
	// Perform actions after the page is completely loaded
	console.log('The page has been completely loaded.');
});