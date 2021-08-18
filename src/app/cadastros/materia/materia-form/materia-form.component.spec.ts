import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaFormComponent } from './materia-form.component';

describe('MateriaFormComponent', () => {
  let component: MateriaFormComponent;
  let fixture: ComponentFixture<MateriaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
