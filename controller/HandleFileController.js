import '../service/HandleFileService.js';
import '../view/HandleView.js';
	
//Code that works with controller: handle import file
function handleImportFile(input) {
	debugger
	readFileExcel(input).then(jsonData => {
		// Process json Data here	
		removeContent(getElementDisplayByElementID());
		// Display data
		console.log(jsonData);
		displayData(jsonData, getElementDisplayByElementID());
	})
	.catch(error => {
		// Error handling here
		console.error(error);
	});
	//console.log(a);
}
	
// Code that works with controller: handle print exam schedule
function handlePrintSchedule() {
	printSchedule();
}
	
// Code that works with controller: handle export to excel
function handleExportToExcel() {
	exportToExcel();
}

// Code that works with controller: handle format data display
function handleFormatDataDisplay() {
	formatDataDisplay();
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