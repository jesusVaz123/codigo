import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecapturamanualModalComponent } from './detallecapturamanual-modal.component';

describe('DetallecapturamanualModalComponent', () => {
  let component: DetallecapturamanualModalComponent;
  let fixture: ComponentFixture<DetallecapturamanualModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallecapturamanualModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallecapturamanualModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
