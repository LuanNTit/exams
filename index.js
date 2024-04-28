import * as HandleFileController from './controller/HandleFileController.js';
import * as ExamController from './controller/ExamController.js';
import * as ElementUtil from './util/ElementUtil.js';

const elementFile = ElementUtil.getElementDisplayById('excel-file');
elementFile.addEventListener('change', HandleFileController.handleImportFile);

const elementFormat = ElementUtil.getElementDisplayById('format');
elementFormat.addEventListener('click', ExamController.handleFormatDataDisplay);
