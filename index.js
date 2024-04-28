import * as HandleFileController from './controller/HandleFileController.js';
import * as ExamController from './controller/ExamController.js';
import * as ElementUtil from './util/ElementUtil.js';

const elementFile = ElementUtil.getElementDisplayById('excel-file');
elementFile.addEventListener('change', HandleFileController.handleImportFile);

const elementFormat = ElementUtil.getElementDisplayById('format');
elementFormat.addEventListener('click', ExamController.handleFormatDataDisplay);

const elementPrint = ElementUtil.getElementDisplayById('print');
elementPrint.addEventListener('click', HandleFileController.handlePrintSchedule);

const elementExport = ElementUtil.getElementDisplayById('export');
elementExport.addEventListener('click', HandleFileController.handleExportToExcel);

const elementReload = ElementUtil.getElementDisplayById('reload');
elementReload.addEventListener('click', ExamController.handleReloadPage);