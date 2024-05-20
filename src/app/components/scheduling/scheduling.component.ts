import { Component } from '@angular/core';
import { ExamComponent } from '../exam/exam.component';

@Component({
  selector: 'app-scheduling',
  standalone: true,
  imports: [ExamComponent],
  templateUrl: './scheduling.component.html',
  styleUrl: './scheduling.component.scss'
})
export class SchedulingComponent {

}
