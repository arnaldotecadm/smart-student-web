import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoFormComponent } from './aluno-form.component';

describe('AlunoFormComponent', () => {
  let component: AlunoFormComponent;
  let fixture: ComponentFixture<AlunoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
