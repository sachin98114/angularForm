import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempliteralFormsComponent } from './templiteral-forms.component';

describe('TempliteralFormsComponent', () => {
  let component: TempliteralFormsComponent;
  let fixture: ComponentFixture<TempliteralFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempliteralFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempliteralFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
