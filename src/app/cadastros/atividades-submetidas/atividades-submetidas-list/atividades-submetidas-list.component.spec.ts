import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesSubmetidasListComponent } from './atividades-submetidas-list.component';

describe('AtividadesSubmetidasListComponent', () => {
  let component: AtividadesSubmetidasListComponent;
  let fixture: ComponentFixture<AtividadesSubmetidasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadesSubmetidasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesSubmetidasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
