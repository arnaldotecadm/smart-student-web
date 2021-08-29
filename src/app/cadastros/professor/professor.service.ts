import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CalendarioEventInterface } from "app/interfaces/calendar-event.interface";
import { of } from "rxjs";
import { environment } from "../../../environments/environment";

const API = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class ProfessorService implements CalendarioEventInterface {
  constructor(private http: HttpClient) {}

  getAllCalendarioEvent() {
    return of([]);
  }
  getByIdCalendarioEvent(documentId: string) {
    return of(null);
  }
  deleteByIdCalendarioEvent(id: string) {
    return of(null);
  }
  saveCalendarioEvent(data: any) {
    return of(null);
  }

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
}
