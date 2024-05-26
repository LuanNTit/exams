import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeMnComponent } from './time-mn.component';

describe('TimeMnComponent', () => {
  let component: TimeMnComponent;
  let fixture: ComponentFixture<TimeMnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeMnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
