import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaTurmaFormComponent } from './nota-turma-form.component';

describe('NotaTurmaFormComponent', () => {
  let component: NotaTurmaFormComponent;
  let fixture: ComponentFixture<NotaTurmaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaTurmaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaTurmaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
