import * as HandleFileService from '../service/HandleFileService.js';
import * as HandleView from '../view/HandleView.js';
import * as ElementUtil from '../util/ElementUtil.js';

// import file
export function importFileAndDisplay(input) {
	console.log("Handling import file...");
	HandleFileService.readFileExcel(input).then(jsonData => {
		// Display data
		console.log(jsonData);
		HandleView.displayData(jsonData, ElementUtil.getElementDisplay());
	})
	.catch(error => {
		console.error(error);
	});
}
	
// Code that works with controller: handle export to excel
export function handleExportToExcel() {
	HandleFileService.exportToExcel();
}
	
// Code that works with service: handle scheduling
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

// Code that works with controller: handle print exam schedule
export function handlePrintSchedule() {
	HandleView.printSchedule();
}