import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "../../../environments/environment";

const API = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class MateriaService {
  constructor(private http: HttpClient) {}

  getAll() {
    return of([{ id: 1, nome: "Arnaldo", idade: 28 }]);
  }

  getById(id: number) {
    return of({ id: 1, nome: "Arnaldo", idade: 28 });
  }
}
