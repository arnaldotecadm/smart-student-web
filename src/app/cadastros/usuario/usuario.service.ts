import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "../../../environments/environment";

const API = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(API + "/usuario");
  }

  getById(id: string) {
    return this.http.get<any[]>(API + "/usuario/" + id);
  }

  salvarRegistro(formData) {
    return this.http.post<any>(API + "/usuario", formData);
  }

  deleteById(id: string) {
    return this.http.delete<any[]>(API + "/usuario/" + id);
  }

  createNewUsuario(token: string) {
    return this.http.post(API + "/usuario/create-user-from-token", token);
  }

  getAllAprovados() {
    return this.http.get<any[]>(API + "/usuario/aprovados");
  }

  getAllReprovados() {
    return this.http.get<any[]>(API + "/usuario/reprovados");
  }

  getAllPendentes() {
    return this.http.get<any[]>(API + "/usuario/pendentes");
  }
}
