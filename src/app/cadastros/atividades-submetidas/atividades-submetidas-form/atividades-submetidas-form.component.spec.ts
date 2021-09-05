import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesSubmetidasFormComponent } from './atividades-submetidas-form.component';

describe('AtividadesSubmetidasFormComponent', () => {
  let component: AtividadesSubmetidasFormComponent;
  let fixture: ComponentFixture<AtividadesSubmetidasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadesSubmetidasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesSubmetidasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
