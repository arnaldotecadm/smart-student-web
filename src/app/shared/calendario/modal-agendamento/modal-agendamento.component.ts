import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MustConfirm } from "app/decorators/must-confirm.decorators";
import { CalendarioEventInterface } from "app/interfaces/calendar-event.interface";
import { MenssageService } from "app/shared/notification/notification.service";
import moment = require("moment");
import { ModalAgendamentoInterface } from "./modal-agendamento.interface";

@Component({
  selector: "app-modal-agendamento",
  templateUrl: "./modal-agendamento.component.html",
  styleUrls: ["./modal-agendamento.component.css"],
})
export class ModalAgendamentoComponent implements OnInit {
  public formulario: FormGroup;
  service: CalendarioEventInterface;
  idRelacionamento;
  dataAtual;
  documentId;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalAgendamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalAgendamentoInterface
  ) {
    dialogRef.disableClose = true;
    this.service = data.service;
    this.idRelacionamento = data.idRelacionamento;
    this.documentId = data.documentId;
  }

  ngOnInit(): void {
    this.construirFormulario();
    this.formulario.patchValue({
      idRelacionamento: this.idRelacionamento,
      data: moment(this.data.dataSelecionada).format("DD/MM/yyyy"),
    });
    this.service
      .getByIdCalendarioEvent(this.data.documentId)
      .subscribe((entry) => {
        if (entry.id) {
          this.formulario.patchValue(entry);
          this.formulario
            .get("data")
            .setValue(moment(this.data.dataSelecionada).format("DD/MM/yyyy"));
        } else {
          this.formulario.patchValue({
            id: this.data.idFuncionario,
            data: moment(this.data.dataSelecionada).format("DD/MM/YYYY"),
          });
        }
        this.formulario.patchValue({
          idRelacionamento: this.idRelacionamento,
        });
      });
  }

  updateEntry() {
    Object.keys(this.formulario.controls).forEach((field) => {
      const control = this.formulario.get(field);
      control.markAsTouched({ onlySelf: true });
    });

    if (this.formulario.invalid) {
      return;
    }

    this.service
      .saveCalendarioEvent(this.formulario.getRawValue())
      .subscribe((data) => {
        this.dialogRef.close({
          remove: false,
          data,
        });
      });
  }

  @MustConfirm("Deseja realemnte excluir este registro?")
  removeEntry(): void {
    this.service.deleteByIdCalendarioEvent(this.documentId).subscribe(() => {
      this.dialogRef.close({
        remove: true,
        documentId: this.documentId,
      });
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isFieldValid(field: string) {
    return (
      !this.formulario.get(field).valid && this.formulario.get(field).touched
    );
  }

  private construirFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      documentId: [],
      data: [{ value: "", disabled: true }],
      evento: [],
      descricao: [],
      idRelacionamento: [],
    });
  }
}
