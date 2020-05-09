import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSchemesComponent } from './list-schemes.component';

describe('ListSchemesComponent', () => {
  let component: ListSchemesComponent;
  let fixture: ComponentFixture<ListSchemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSchemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
