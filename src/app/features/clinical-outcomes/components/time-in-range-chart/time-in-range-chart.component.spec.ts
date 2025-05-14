import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeInRangeChartComponent } from './TimeInRangeChartComponent';

describe('TimeInRangeChartComponent', () => {
  let component: TimeInRangeChartComponent;
  let fixture: ComponentFixture<TimeInRangeChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeInRangeChartComponent],
    });
    fixture = TestBed.createComponent(TimeInRangeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
