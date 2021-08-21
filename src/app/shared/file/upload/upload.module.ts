import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { DiretivasModule } from "app/diretivas/diretivas.module";
import { MatFileUploadModule } from "../file-upload-multi/mat-file-upload.module";
import { UploadComponent } from "./upload.component";

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    DiretivasModule,
    MatFileUploadModule,
    DragDropModule,
    MatButtonModule,
  ],
  exports: [UploadComponent],
})
export class UploadModule {}
