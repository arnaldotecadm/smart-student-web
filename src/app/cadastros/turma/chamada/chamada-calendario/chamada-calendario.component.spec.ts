import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaCalendarioComponent } from './chamada-calendario.component';

describe('ChamadaCalendarioComponent', () => {
  let component: ChamadaCalendarioComponent;
  let fixture: ComponentFixture<ChamadaCalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadaCalendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadaCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
