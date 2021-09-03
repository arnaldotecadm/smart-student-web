import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "../../../environments/environment";

const API = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class MinhasAtividadesService {
  constructor(private http: HttpClient) {}

  getAtividadesByAluno() {
    return this.http.get<any[]>(API + "/atividade/atividades-por-aluno/");
  }
}
