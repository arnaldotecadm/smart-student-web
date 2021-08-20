import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AtividadeFormComponent } from "./tipo-atividade-form.component";

describe("AtividadeFormComponent", () => {
  let component: AtividadeFormComponent;
  let fixture: ComponentFixture<AtividadeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AtividadeFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
