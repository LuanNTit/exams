import { Component, inject, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Exam } from '../exam';
import { ExamService } from '../exam.service';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [CommonModule, NgxPrintModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss'
})
export class ExamComponent implements AfterViewInit {
  examList: Exam[] = []
  filteredExamList: Exam[] = [];
  examService: ExamService = inject(ExamService);
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.examService.getAllExams().then((examList: Exam[]) => {
      this.examList = examList;
      this.filteredExamList = this.examList;
    });
    // this.filteredExamList = this.examList;
  }
  
  ngAfterViewInit() {
    this.formatDataDisplay();
  }
  formatDataDisplay() {
    // Get all cells containing an ellipsis
    const cells = this.elementRef.nativeElement.querySelectorAll('table th, table td');
    cells.forEach((cell: HTMLElement) => {
      // Check if the content exceeds max-width
      if (cell.scrollWidth > cell.offsetWidth) {
        // Reduce the font size until the content does not exceed max-width
        while (cell.scrollWidth > cell.offsetWidth) {
          const fontSize = window.getComputedStyle(cell).fontSize;
          const newFontSize = (parseFloat(fontSize) - 1) + 'px';
          this.renderer.setStyle(cell, 'font-size', newFontSize);
        }
      }
    });
    console.log('The page has been completely formatted.');
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredExamList = this.examList;
    }
    this.filteredExamList = this.examList.filter(
      exam => exam?.courseName.toLowerCase().includes(text.toLowerCase())
    );
  }
  reloadPage() {
    sessionStorage.removeItem('savedContent');
    location.reload();
  }
  exportToExcel() {
    /* Get table element */
    const table = document.getElementById('excel-data');

    /* Convert table to workbook */
    const wb = XLSX.utils.table_to_book(table);

    /* Generate Excel file */
    XLSX.writeFile(wb, 'data.xlsx');
  }
  saveSchedulingExam() { }
}