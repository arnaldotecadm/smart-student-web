import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

const API = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class FileService {
  constructor(private http: HttpClient) {}

  salvarRegistro(formData: FormData) {
    return this.http.post<any>(API + "/upload/add", formData);
  }

  getAll() {
    return this.http.get<any[]>(API + "/upload/all");
  }

  getAllByAtividade(atividadeId) {
    return this.http.get<any[]>(API + "/upload/all/" + atividadeId);
  }

  getById(id: number) {
    return this.http.get<any>(API + "/upload/id/" + id);
  }

  removeById(id: number) {
    return this.http.delete<any[]>(API + "/upload/remove/" + id);
  }

  getByProcesso(processoId: number) {
    return this.http.get<any>(API + "/upload/por-processo/" + processoId);
  }

  download(atividadeId: string, nomeArquivo: string) {
    return this.http.get(
      API + "/upload/download/" + atividadeId + "/" + nomeArquivo,
      {
        observe: "response",
        responseType: "arraybuffer",
      }
    );
  }
}
