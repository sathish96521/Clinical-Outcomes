import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalOutcomesComponent } from './clinical-outcomes.component';

describe('ClinicalOutcomesComponent', () => {
  let component: ClinicalOutcomesComponent;
  let fixture: ComponentFixture<ClinicalOutcomesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicalOutcomesComponent]
    });
    fixture = TestBed.createComponent(ClinicalOutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
