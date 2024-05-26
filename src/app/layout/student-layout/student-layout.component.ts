import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.scss'
})
export class StudentLayoutComponent {
  @Input() showStudentBoard?: boolean;
  @Output() someEvent = new EventEmitter();

  callLogoutParent(): void {
    this.someEvent.emit();
  }
}
