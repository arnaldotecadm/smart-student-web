import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasAtividadesListComponent } from './minhas-atividades-list.component';

describe('MinhasAtividadesListComponent', () => {
  let component: MinhasAtividadesListComponent;
  let fixture: ComponentFixture<MinhasAtividadesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasAtividadesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasAtividadesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
