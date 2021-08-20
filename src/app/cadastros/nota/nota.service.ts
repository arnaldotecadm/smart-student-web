import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "../../../environments/environment";

const API = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class NotaService {
  constructor(private http: HttpClient) {}

  getAllTurmas() {
    return this.http.get<any[]>(API + "/turma");
  }
}
