import { HttpHeaders, HttpParams } from "@angular/common/http";
import {
  AfterViewInit,
  Component,
  ContentChildren,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "app/shared/modals/confirm/confirm.component";
import { merge, Subscription } from "rxjs";
import { startWith } from "rxjs/operators";
import { FileModel } from "../file.interface";
import { MatFileUploadMultiComponent } from "./mat-file-upload-multi.component";

/**
 * A material design file upload queue component.
 */
@Component({
  selector: "app-mat-file-upload-queue",
  templateUrl: "mat-file-upload-multi-queue.html",
  exportAs: "matFileUploadQueue",
  styleUrls: ["./matFileUploadQueue.css"],
})
export class MatFileUploadQueueComponent
  implements OnChanges, AfterViewInit, OnInit
{
  @ContentChildren(forwardRef(() => MatFileUploadMultiComponent), {
    descendants: true,
  })
  fileUploads: QueryList<MatFileUploadMultiComponent>;

  /** Subscription to remove changes in files. */
  private fileRemoveSubscription: Subscription | null;

  /** Subscription to changes in the files. */
  private changeSubscription: Subscription;

  /** Combined stream of all of the file upload remove change events. */
  get fileUploadRemoveEvents() {
    return merge(
      ...this.fileUploads.map((fileUpload) => fileUpload.removeEvent)
    );
  }

  files: Array<any> = [];

  /* Http request input bindings */

  @Input()
  httpRequestHeaders:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      } = new HttpHeaders().set("Content-Type", "multipart/form-data");

  @Input()
  httpRequestParams:
    | HttpParams
    | {
        [param: string]: string | string[];
      } = new HttpParams();

  @Input() listaArquivos: FileModel[];
  @Input() exibeNomePadronizadoArquivo = false;
  @Input() fileAlias = "file";
  @Input() controllerAction = "";
  @Input() httpUrl = "";
  @Input() modoEdicao: boolean;
  hasFiles = false;
  contagem = 0;
  ArquivosNaoCarregados = false;
  ultimoInserido = -1;
  idArquivoDocumento = -1;
  private idDocumentoGerado = -1;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    // When the list changes, re-subscribe

    this.changeSubscription = this.fileUploads.changes
      // tslint:disable-next-line: deprecation
      .pipe(startWith(null))
      .subscribe(() => {
        if (this.fileRemoveSubscription) {
          this.fileRemoveSubscription.unsubscribe();
        }

        this._listenTofileRemoved();
        this._listenTofileUploaded();
      });
  }

  private reordenarArray() {
    for (let i = 0; i <= this.files.length - 1; i++) {
      this.files[i].ordem = i + 1;
    }
    const listaReordenada = this.files.map((f) => {
      return {
        id: f.id,
        ordem: f.ordem,
      };
    });
  }

  private _listenTofileRemoved(): void {
    this.fileRemoveSubscription = this.fileUploadRemoveEvents.subscribe(
      (event: MatFileUploadMultiComponent) => {
        this.files.splice(event.id, 1);
        this.ultimoInserido = -1;

        this.reordenarArray();

        if (event.gravadoNaBase || event.fromDataBase) {
          this.contagem--;
        }
        this.hasFiles = this.contagem > 0;
      }
    );
    this.ArquivosNaoCarregados =
      this.files.filter((x) => x.gravadoNaBase !== true).length > 0;
  }

  private _listenTofileUploaded(): void {
    this.ArquivosNaoCarregados =
      this.files.filter((x) => x.gravadoNaBase !== true).length > 0;
  }

  add(file: any) {
    file.ordem = this.files.length + 1;
    if (this.idArquivoDocumento) {
      file.idArquivoDocumento = this.idArquivoDocumento;
    }
    this.files.push(file);

    this.ArquivosNaoCarregados = true;
  }

  async realizarUpload(arquivo: MatFileUploadMultiComponent) {
    const resultadoExecucao = await arquivo.upload();
  }

  async enviarArquivo(arquivo: MatFileUploadMultiComponent) {
    const resultadoExecucao = await arquivo.upload();
    this.idDocumentoGerado = +resultadoExecucao;
  }

  public async uploadAll() {
    for (let i = 0; i < this.fileUploads.length; i++) {
      const arquivo = this.fileUploads.toArray()[i];

      if (this.idDocumentoGerado > -1) {
        arquivo.idArquivoDocumento = this.idDocumentoGerado;
      }

      if (!arquivo.gravadoNaBase) {
        await this.enviarArquivo(arquivo);
      }
    }

    this.idDocumentoGerado = -1;
    this.ArquivosNaoCarregados =
      this.files.filter((x) => x.gravadoNaBase !== true).length > 0;
  }

  public removeAll() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        fnOk: () => {
          this.removeDefinitivamente();
        },
        subtitle: "Deseja realmente excluir TODOS os arquivos??",
      },
    });
  }
  public removeDefinitivamente() {
    for (let i = this.fileUploads.length; i > 0; i--) {
      this.fileUploads.toArray()[i - 1].remove(false);
    }
  }

  private createFile(nomeArquivo: string) {
    return new File([new Blob()], nomeArquivo);
  }

  ngOnInit() {
    this.refreshFileList();
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.listaArquivos) {
      this.refreshFileList();
    }
  }

  private refreshFileList() {
    if (this.listaArquivos) {
      this.files = [];
      for (let i = 0; i <= this.listaArquivos.length - 1; i++) {
        const arquivo: any = this.createFile(this.listaArquivos[i].nomeArquivo);
        arquivo.id = this.listaArquivos[i].id;
        arquivo.gravadoNaBase = true;
        arquivo.ordem = i + 1;
        arquivo.nomeArquivo = this.listaArquivos[i].nomeArquivo;
        arquivo.tamanhoArquivo = this.listaArquivos[i].tamanhoArquivo;
        this.files.push(arquivo);
      }
    }
  }
}
