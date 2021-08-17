import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoListComponent } from './aluno-list.component';

describe('AlunoListComponent', () => {
  let component: AlunoListComponent;
  let fixture: ComponentFixture<AlunoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
