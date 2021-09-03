import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasAtividadesFormComponent } from './minhas-atividades-form.component';

describe('MinhasAtividadesFormComponent', () => {
  let component: MinhasAtividadesFormComponent;
  let fixture: ComponentFixture<MinhasAtividadesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasAtividadesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasAtividadesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
