import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-tabela-master-detail",
  templateUrl: "./tabela-master-detail.component.html",
  styleUrls: ["./tabela-master-detail.component.css"],
})
export class TabelaMasterDetailComponent implements OnInit {
  @Input() data;
  @Input() detailData;

  @Input() masterDisplayedColumns = [
    { head: "Nº do Pedido", el: "numres" },
    { head: "Emissão", el: "dteres", format: "DATE" },
    { head: "Vendedor", el: "nomven" },
    { head: "Padrão Fat.", el: "codpfa" },
    { head: "Cliente", el: "nomcli" },
    { head: "Total Itens", el: "totres" },
    { head: "Total Pedido", el: "totger" },
    { head: "Markup(%)", el: "totren" },
    { head: "Ações", el: "actions" },
  ];
  @Input() detailDisplayedColumns;
  @Input() headerTitle;
  @Input() pageSizeOptions = [5, 10, 15];

  @Output() selectedRow = new EventEmitter();
  @Output() acaoSelecionada = new EventEmitter();

  selectedItem;

  constructor() {}

  ngOnInit(): void {}

  onSelectedRow($event) {
    if (
      this.selectedItem &&
      $event &&
      this.selectedItem[this.masterDisplayedColumns[0].el] ==
        $event[this.masterDisplayedColumns[0].el]
    ) {
      this.selectedItem = null;
    } else {
      this.selectedItem = $event;
    }

    if (this.selectedItem) {
      let qtdChars = this.selectedItem.codcli.toString().length;
      let finalCode = "";

      for (let i = 0; i <= 5 - qtdChars; i++) {
        finalCode += "0";
      }

      this.selectedItem.codcli = finalCode + this.selectedItem.codcli;
    }

    this.selectedRow.emit($event);
  }

  propagate(acaoPropagate) {
    this.acaoSelecionada.emit({
      acao: acaoPropagate.acao,
      item: acaoPropagate.item,
    });
  }
}
