import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AtividadeListComponent } from "./tipo-atividade-list.component";

describe("AtividadeListComponent", () => {
  let component: AtividadeListComponent;
  let fixture: ComponentFixture<AtividadeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AtividadeListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
