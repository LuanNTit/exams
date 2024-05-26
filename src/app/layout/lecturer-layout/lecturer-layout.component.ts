import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lecturer-layout',
  templateUrl: './lecturer-layout.component.html',
  styleUrl: './lecturer-layout.component.scss'
})
export class LecturerLayoutComponent {
  @Input() showLecturerBoard?: boolean;
  @Output() someEvent = new EventEmitter();

  callLogoutParent(): void {
    this.someEvent.emit();
  }
}
