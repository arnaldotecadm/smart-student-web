import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from "@angular/core";
import { environment } from "../../../../environments/environment";
import { FileService } from "../file.service";

const API = environment.ApiUrl;

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"],
})
export class UploadComponent implements OnChanges, AfterContentInit {
  listaArquivos: any[];

  RotaApiEntrada = "";

  @Input() tipoMaterial;
  @Input() usuario;
  @Input() atividadeUUID;
  @Output() RotaApiSaida = API + "/upload/add";

  @ViewChild("fileUploadQueue", { static: false }) matFileUpload: any;

  @Input() accept = ".pdf";

  @Input() habilitarManipulacao = true;

  constructor(private cdr: ChangeDetectorRef, private service: FileService) {}

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.idProcesso) {
      this.recaregarListaArquivos();
    }
  }

  removeEntry(arquivo: any) {
    if (arquivo.file.id) {
      this.service.removeById(arquivo.file.id).subscribe((data: any) => {
        console.log("Resposta do servidor: " + data.message);
        this.recaregarListaArquivos();
      });
    }
  }

  ngAfterContentInit(): void {
    this.recaregarListaArquivos();
  }

  private recaregarListaArquivos() {
    if (!!!this.atividadeUUID) {
      return;
    }

    this.service
      .getAllByAtividade(this.tipoMaterial, this.atividadeUUID, this.usuario)
      .subscribe((dados) => {
        this.listaArquivos = dados;
      });
  }
}
