import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineOverviewCardComponent } from './machine-overview-card.component';

describe('MachineOverviewCardComponent', () => {
  let component: MachineOverviewCardComponent;
  let fixture: ComponentFixture<MachineOverviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineOverviewCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
