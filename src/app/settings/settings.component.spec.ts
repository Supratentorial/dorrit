import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludeTypesComponent } from './settings.component';

describe('ExcludeTypesComponent', () => {
  let component: ExcludeTypesComponent;
  let fixture: ComponentFixture<ExcludeTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcludeTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcludeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
