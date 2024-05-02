import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutHeaderAndFooterComponent } from './without-header-and-footer.component';

describe('WithoutHeaderAndFooterComponent', () => {
  let component: WithoutHeaderAndFooterComponent;
  let fixture: ComponentFixture<WithoutHeaderAndFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutHeaderAndFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithoutHeaderAndFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
