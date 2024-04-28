import * as HandleFileController from './controller/HandleFileController.js';
import * as ExamController from './controller/ExamController.js';
import * as ElementUtil from './util/ElementUtil.js';

// Load data exam
//ExamController.loadDataExam();

// Import file
const elementFile = ElementUtil.getElementDisplayById('excel-file');
elementFile.addEventListener('change', HandleFileController.importFileAndDisplay);

// Format data display
const elementFormat = ElementUtil.getElementDisplayById('format');
elementFormat.addEventListener('click', ExamController.handleFormatDataDisplay);

// Print schedule
const elementPrint = ElementUtil.getElementDisplayById('print');
elementPrint.addEventListener('click', HandleFileController.handlePrintSchedule);

// Export to excel
const elementExport = ElementUtil.getElementDisplayById('export');
elementExport.addEventListener('click', HandleFileController.handleExportToExcel);

// Reload Page
const elementReload = ElementUtil.getElementDisplayById('reload');
elementReload.addEventListener('click', ExamController.handleReloadPage);