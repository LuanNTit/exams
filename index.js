import * as HandleFileController from './controller/HandleFileController.js';
import * as ExamController from './controller/ExamController.js';
import * as ElementUtil from './util/ElementUtil.js';

const element = ElementUtil.getElementDisplayById('excel-file');
element.addEventListener('change', HandleFileController.handleImportFile);