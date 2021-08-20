import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaFormComponent } from './nota-form.component';

describe('NotaFormComponent', () => {
  let component: NotaFormComponent;
  let fixture: ComponentFixture<NotaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
