import * as HandleFileService from '../service/HandleFileService.js';
import * as HandleView from '../view/HandleView.js';
import * as ElementUtil from '../util/ElementUtil.js';

//Code that works with controller: handle import file
export function handleImportFile(input) {
	console.log("Handling import file...");
	HandleFileService.readFileExcel(input).then(jsonData => {
		// Process json Data here	
		ElementUtil.removeContentDisplay();
		// Display data
		console.log(jsonData);
		HandleView.displayData(jsonData, ElementUtil.getElementDisplay());
	})
	.catch(error => {
		// Error handling here
		console.error(error);
	});
	//console.log(a);
}
	
// Code that works with controller: handle export to excel
function handleExportToExcel() {
	exportToExcel();
}



// Code that works with controller: handle reload -->
function handleReloadPage() {
	reloadPage();
}
	
// Code that works with controller: handle scheduling
function handleScheduling() {
	debugger
	const courses = arrangeCoursesWithInstructors();
	console.log(courses);
	// lay cot ct1, ct2
	const dataCellCt1AndCt2 = getDataFromCells(courses, ["proctor1", "proctor2"]);
	console.log(dataCellCt1AndCt2);
	// gan vao exam data
	setExamDatas(["ct1", "ct2"], dataCellCt1AndCt2);
	// hien thi bang exam data
	
}