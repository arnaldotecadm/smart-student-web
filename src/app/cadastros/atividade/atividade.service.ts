import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "../../../environments/environment";

const API = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class AtividadeService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(API + "/atividade");
  }

  getById(id: string) {
    return this.http.get<any[]>(API + "/atividade/" + id);
  }

  salvarRegistro(formData: FormData) {
    return this.http.post<any>(API + "/atividade", formData);
  }

  deleteById(id: string) {
    return this.http.delete<any[]>(API + "/atividade/" + id);
  }
}