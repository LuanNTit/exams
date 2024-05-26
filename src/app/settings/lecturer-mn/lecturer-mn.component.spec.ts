import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerMnComponent } from './lecturer-mn.component';

describe('LecturerMnComponent', () => {
  let component: LecturerMnComponent;
  let fixture: ComponentFixture<LecturerMnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturerMnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LecturerMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
