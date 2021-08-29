import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CalendarioEventInterface } from "app/interfaces/calendar-event.interface";
import { environment } from "../../../environments/environment";
import moment = require("moment");

const API = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class ProfessorService implements CalendarioEventInterface {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(API + "/professor");
  }

  getById(id: string) {
    return this.http.get<any[]>(API + "/professor/" + id);
  }

  salvarRegistro(formData: FormData) {
    return this.http.post<any>(API + "/professor", formData);
  }

  deleteById(id: string) {
    return this.http.delete<any[]>(API + "/professor/" + id);
  }

  getAllCalendarioEvent(documentId) {
    return this.http.get<any[]>(
      API + "/calendario-professor/all/" + documentId
    );
  }

  getByIdCalendarioEvent(documentId: string) {
    return this.http.get<any[]>(API + "/calendario-professor/" + documentId);
  }

  deleteByIdCalendarioEvent(id: string) {
    return this.http.delete<any[]>(API + "/calendario-professor/" + id);
  }

  saveCalendarioEvent(data) {
    const calendarioProfessor = {
      id: data.id,
      documentId: data.documentId,
      evento: data.evento,
      descricao: data.descricao,
      data: moment(data.data, "DD/MM/YYYY"),
      professor: data.idRelacionamento,
    };

    return this.http.post<any[]>(
      API + "/calendario-professor",
      calendarioProfessor
    );
  }
}
