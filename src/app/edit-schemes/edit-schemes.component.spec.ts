import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchemesComponent } from './edit-schemes.component';

describe('EditSchemesComponent', () => {
  let component: EditSchemesComponent;
  let fixture: ComponentFixture<EditSchemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSchemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
