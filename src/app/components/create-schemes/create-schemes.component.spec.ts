import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchemesComponent } from './create-schemes.component';

describe('CreateSchemesComponent', () => {
  let component: CreateSchemesComponent;
  let fixture: ComponentFixture<CreateSchemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSchemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
