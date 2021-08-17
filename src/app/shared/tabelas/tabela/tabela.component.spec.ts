import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
} from "@angular/common";
import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { PipesModule } from "../pipes/pipes.module";

import { TabelaComponent } from "./tabela.component";

describe("TabelaComponent", () => {
  let component: TabelaComponent;
  let fixture: ComponentFixture<TabelaComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        RouterModule,
        MatIconModule,
        PipesModule,
      ],
      providers: [DecimalPipe, DatePipe, CurrencyPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    loadInputs(component);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Deve mostrar o titulo correto", () => {
    expect(component.headerTitle).toEqual("tituloPassadoPorParametro");
  });

  it("Deve selecionar e deselecionar o primeiro registro", () => {
    component.highlight(component.dados[0]);
    expect(+component.selectedRowIndex).toEqual(1);

    component.highlight(component.dados[0]);
    expect(+component.selectedRowIndex).toEqual(-1);
  });

  it("Deve popular a tabela corretamente", () => {
    expect(
      fixture.nativeElement.querySelectorAll(".linha-coluna").length
    ).toEqual(2);
  });
});

function loadInputs(component: TabelaComponent) {
  component.headerTitle = "tituloPassadoPorParametro";
  component.displayedColumns = [
    { head: "Código", el: "codcli" },
    { head: "Cidade", el: "cifcli" },
    { head: "Nome Razão Social", el: "nomcli" },
    { head: "CPF/CNPJ", el: "cgccli" },
  ];
  component.dados = [
    {
      codcli: "1",
      cifcli: "dado qualquer",
      nomcli: "Arnaldo C. Bezerra",
      cgccli: "0000000000",
    },
    {
      codcli: "2",
      cifcli: "dado qualquer",
      nomcli: "Nome 02",
      cgccli: "0123456789012",
    },
  ];
}
