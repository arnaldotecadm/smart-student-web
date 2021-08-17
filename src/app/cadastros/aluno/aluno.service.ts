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

  getClientes() {
    return of([{ id: 1, nome: "Arnaldo", idade: 28 }]);
  }

  getClienteInfo(codigoCliente: number) {
    return this.http.get<any[]>(API + "/area-cliente/cliente/" + codigoCliente);
  }

  getEnderecos(codigoCliente: number) {
    return this.http.get<any[]>(
      API + "/area-cliente/endereco-cliente/" + codigoCliente
    );
  }
}
