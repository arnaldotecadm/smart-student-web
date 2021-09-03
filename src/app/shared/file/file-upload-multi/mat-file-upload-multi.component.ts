import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from "@angular/common/http";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BytePipe } from "app/pipes/byte-pipe.pipe";
import { ConfirmDialogComponent } from "app/shared/modals/confirm/confirm.component";
import { FileService } from "../file.service";
import { ArquivoHandler } from "../handler/handler";

/**
 * A material design file upload component.
 */
@Component({
  selector: "app-mat-file-upload-multi",
  templateUrl: `./mat-file-upload-multi.html`,
  exportAs: "matFileUpload",
  styleUrls: ["./matFileUploadQueue.css"],
})
export class MatFileUploadMultiComponent {
  @Input() atividadeUUID: string;

  constructor(
    private httpClient: HttpClient,
    public dialog: MatDialog,
    private fileService: FileService
  ) {}

  isUploading = false;
  ErroUpload = false;
  gravadoNaBase = false;
  fromDataBase = false;

  @Input() httpUrl = "";
  @Input() tipoMaterial = "";

  @Input()
  httpRequestParams:
    | HttpParams
    | {
        [param: string]: string | string[];
      } = new HttpParams();

  @Input()
  fileAlias = "file";

  @Input()
  get file(): any {
    return this._file;
  }
  set file(file: any) {
    this._file = file;
    this.total = this._file.size;

    if (this.file.gravadoNaBase) {
      this.status = "Gravado";
      this.progressPercentage = 100;
      this.gravadoNaBase = true;
      this.fromDataBase = true;
    }
  }

  @Input()
  set id(id: number) {
    this._id = id;
  }
  get id(): number {
    return this._id;
  }

  @Input() progressoNaoIniciada = true;
  @Input() progressoExecucao = false;

  /** Output  */
  @Output() removeEvent = new EventEmitter<MatFileUploadMultiComponent>();
  @Output() uploaded = new EventEmitter();

  @Output() SaidaErroMensagem = "";

  @Input() idArquivoDocumento;

  progressPercentage = 0;

  status = "Não carregado";
  public loaded = 0;
  private total = 0;
  private _file: any;
  private _id: number;
  private fileUploadSubscription: any;

  public upload() {
    return new Promise((dados) => {
      if (this._file.size / 1024 > 10240) {
        this.status = "Erro no carregamento";
        this.gravadoNaBase = false;
        this.isUploading = false;
        this.ErroUpload = true;
        this.SaidaErroMensagem =
          "Tamanho do arquivo supera limite máximo suportado: 10MB";
        this.uploaded.emit({ file: this._file, event });

        dados(this._file.idArquivoDocumento + " - " + this.idArquivoDocumento);
        return;
      }

      this.isUploading = true;
      this.status = "0%";

      const formData = new FormData();
      formData.set(this.fileAlias, this._file, this._file.name);
      formData.append("ordem", this._file.ordem);
      formData.append("tipoMaterial", "" + this.tipoMaterial);
      formData.append("atividadeUUID", "" + this.atividadeUUID);

      this.fileUploadSubscription = this.httpClient
        .post(this.httpUrl, formData, {
          headers: new HttpHeaders({
            // Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          }),
          observe: "events",
          params: this.httpRequestParams,
          reportProgress: true,
          responseType: "json",
        })
        .subscribe(
          (event: any) => {
            this.ErroUpload = false;
            if (event.type === HttpEventType.UploadProgress) {
              this.progressPercentage = Math.floor(
                (event.loaded * 100) / event.total
              );
              this.status = this.progressPercentage.toString() + "%";
              if (this.status === "100%") {
                this.status = "Carregado";
                this.gravadoNaBase = true;
                this.isUploading = false;
              }
              this.loaded = event.loaded;
              this.total = event.total;
            }

            if (event && event.body) {
              this.status = "Carregado";
              this.gravadoNaBase = true;
              this.isUploading = false;
              this.file.id = event.body.id;
              this.file.gravadoNaBase = true;
              dados(this.idArquivoDocumento);
            }

            this.uploaded.emit({ file: this._file, event });
          },
          (error: any) => {
            if (this.fileUploadSubscription) {
              this.fileUploadSubscription.unsubscribe();
            }

            this.isUploading = false;
            this.ErroUpload = true;
            if (error.error.Mensagem) {
              this.status = error.error.Mensagem;
            } else {
              this.status = "Erro no carregamento";
              this.gravadoNaBase = false;
              this.fromDataBase = false;
              this.SaidaErroMensagem = "Arquivo inválido";
            }
            this.uploaded.emit({ file: this._file, event });

            dados("Arquivos Carregados");
          }
        );
    });
  }

  public remove(prompt: boolean = true): void {
    if (prompt) {
      this.openDialog();
    } else {
      this.prosseguirDelecao();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        fnOk: () => {
          this.prosseguirDelecao();
        },
        subtitle: "Deseja realmente excluir o arquivo Selecionado?",
      },
    });
  }

  public prosseguirDelecao() {
    if (this.fileUploadSubscription) {
      this.fileUploadSubscription.unsubscribe();
    }
    this.removeEvent.emit(this);
  }

  public download(atividadeId: string, nomeArquivo: string) {
    this.fileService
      .download(this.tipoMaterial, atividadeId, nomeArquivo)
      .subscribe((res: HttpResponse<ArrayBuffer>) => {
        ArquivoHandler.renderAndDownloadFile(res.body, nomeArquivo);
      });
  }

  public getNomeArquivoOriginal(nomeOriginal: string): string {
    const bytes = new BytePipe();
    const tam = this.file.size ? this.file.size : this.file.tamanhoArquivo;
    if (this.file.name.length > 20) {
      return `${`${this.file.name.substring(0, 25)}`}   (${`${bytes.transform(
        tam
      )}`})`;
    } else {
      return `${`${this.file.name}`}   (${`${bytes.transform(tam)}`})`;
    }
  }

  getTamanhoArquivo(tamanho) {
    const bytes = new BytePipe();
    return bytes.transform(tamanho);
  }
}
