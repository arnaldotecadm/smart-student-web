import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaModalComponent } from './chamada-modal.component';

describe('ChamadaModalComponent', () => {
  let component: ChamadaModalComponent;
  let fixture: ComponentFixture<ChamadaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
