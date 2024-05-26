import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomMnComponent } from './room-mn.component';

describe('RoomMnComponent', () => {
  let component: RoomMnComponent;
  let fixture: ComponentFixture<RoomMnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomMnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
