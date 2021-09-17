import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CalendarioEventInterface } from "app/interfaces/calendar-event.interface";
import { environment } from "../../../environments/environment";
import moment = require("moment");

const API = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class TurmaService implements CalendarioEventInterface {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(API + "/turma");
  }

  getById(id: string) {
    return this.http.get<any[]>(API + "/turma/" + id);
  }

  salvarRegistro(formData: FormData) {
    return this.http.post<any>(API + "/turma", formData);
  }

  deleteById(id: string) {
    return this.http.delete<any[]>(API + "/turma/" + id);
  }

  getAllCalendarioEvent(documentId: string) {
    return this.http.get<any[]>(API + "/calendario-turma/all/" + documentId);
  }

  getByIdCalendarioEvent(documentId: string) {
    return this.http.get<any[]>(API + "/calendario-turma/" + documentId);
  }

  deleteByIdCalendarioEvent(id: string) {
    return this.http.delete<any[]>(API + "/calendario-turma/" + id);
  }

  saveCalendarioEvent(data) {
    const calendarioTurma = {
      id: data.id,
      documentId: data.documentId,
      evento: data.evento,
      descricao: data.descricao,
      data: moment(data.data, "DD/MM/YYYY"),
      turma: data.idRelacionamento,
    };

    return this.http.post<any[]>(API + "/calendario-turma", calendarioTurma);
  }

  savePresenceList(data) {
    return this.http.post<any[]>(API + "/lista-presenca/add-all-aluno", data);
  }

  getListaPresencaByTurmaId(turmaId) {
    return this.http.get<any[]>(API + "/lista-presenca/by-turma/" + turmaId);
  }

  saveBoletim(data) {
    return this.http.post<any[]>(API + "/boletim", data);
  }

  getBoletimByTurma(turma) {
    return this.http.get<any[]>(API + "/boletim/boletim-por-turma/" + turma);
  }
}
