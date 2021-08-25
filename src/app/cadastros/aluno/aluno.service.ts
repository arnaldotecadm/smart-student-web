import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "../../../environments/environment";

const API = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class AlunoService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(API + "/aluno");
  }

  getAllTurmas() {
    return this.http.get<any[]>(API + "/turma");
  }

  getAlunosPorTurma(turmaId: string) {
    return this.http.get<any[]>(API + "/aluno/aluno-por-turma/" + turmaId);
  }

  getById(id: string) {
    return this.http.get<any[]>(API + "/aluno/" + id);
  }

  salvarRegistro(formData) {
    return this.http.post<any>(API + "/aluno", formData);
  }

  deleteById(id: string) {
    return this.http.delete<any[]>(API + "/aluno/" + id);
  }
}
