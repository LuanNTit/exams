import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {
  @Input() showAdminBoard?: boolean;
  @Output() someEvent = new EventEmitter();

  callLogoutParent(): void {
    this.someEvent.emit();
  }
}
