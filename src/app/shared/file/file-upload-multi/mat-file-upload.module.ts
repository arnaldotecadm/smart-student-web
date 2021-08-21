import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { PipesModule } from "app/pipes/pipes.module";
import { ModalsModule } from "app/shared/modals/modals.module";
import { MatFileUploadQueueComponent } from "./mat-file-upload-multi-queue.component";
import { MatFileUploadMultiComponent } from "./mat-file-upload-multi.component";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    PipesModule,
    ModalsModule,
  ],
  declarations: [MatFileUploadMultiComponent, MatFileUploadQueueComponent],
  exports: [MatFileUploadMultiComponent, MatFileUploadQueueComponent],
})
export class MatFileUploadModule {}
