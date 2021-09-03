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

  getAllByAtividade(tipoMaterial, atividadeId) {
    return this.http.get<any[]>(
      API + "/upload/all/" + tipoMaterial + "/" + atividadeId
    );
  }

  removeById(id: number) {
    return this.http.delete<any[]>(API + "/upload/remove/" + id);
  }

  download(tipoMaterial, atividadeId: string, nomeArquivo: string) {
    return this.http.get(
      API +
        "/upload/download/" +
        tipoMaterial +
        "/" +
        atividadeId +
        "/" +
        nomeArquivo,
      {
        observe: "response",
        responseType: "arraybuffer",
      }
    );
  }
}
